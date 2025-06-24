import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QuestLogin } from '@questlabs/react-sdk';
import { useQuestAuth } from '../../contexts/QuestAuthContext';
import questConfig from '../../config/questConfig';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiShield, FiTarget, FiTrendingUp } = FiIcons;

const QuestLoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin } = useQuestAuth();

  const onLoginSuccess = ({ userId, token, newUser }) => {
    console.log('Login successful:', { userId, token, newUser });
    
    // Handle login in context
    handleLogin({ 
      userId, 
      token, 
      newUser,
      userData: { userId, newUser, loginTime: new Date().toISOString() }
    });

    // Navigate based on user status
    if (newUser) {
      navigate('/onboarding');
    } else {
      navigate('/dashboard');
    }
  };

  const features = [
    {
      icon: FiTarget,
      title: "Strategic Focus",
      description: "Learn to prioritize what matters most and avoid distractions"
    },
    {
      icon: FiShield,
      title: "Mental Toughness",
      description: "Build unshakeable confidence to overcome any obstacle"
    },
    {
      icon: FiTrendingUp,
      title: "Proven Systems",
      description: "Step-by-step frameworks to scale from zero to seven figures"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center space-x-3">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750785079361-blob" 
                alt="DrivenMind Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-2xl font-bold">DrivenMind</span>
                <span className="text-primary-400">.io</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="block">Master Yourself.</span>
              <span className="block text-primary-400">Build Your Empire.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join thousands of driven entrepreneurs who've used our proven systems to build mental toughness and create lasting success.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={feature.icon} className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">10K+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">5 Years</div>
                <div className="text-sm text-gray-400">Survival Focus</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750785079361-blob" 
                alt="DrivenMind Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="text-xl font-bold text-dark-900">DrivenMind</span>
                <span className="text-primary-600">.io</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-dark-900 mb-2">Welcome Back</h2>
            <p className="text-dark-600">Sign in to continue your journey</p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block mb-8">
            <h2 className="text-3xl font-bold text-dark-900 mb-2">Welcome Back</h2>
            <p className="text-dark-600">Sign in to continue your entrepreneurial journey</p>
          </div>

          {/* Quest Login Component */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <QuestLogin
              onSubmit={onLoginSuccess}
              email={true}
              google={false}
              accent={questConfig.PRIMARY_COLOR}
              style={{
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto'
              }}
            />
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              New to DrivenMind? Create an account above to get started.
            </p>
            <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
              <span>Protected by enterprise-grade security</span>
              <SafeIcon icon={FiShield} className="w-3 h-3" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuestLoginPage;