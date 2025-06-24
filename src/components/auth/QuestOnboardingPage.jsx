import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OnBoarding } from '@questlabs/react-sdk';
import { useQuestAuth } from '../../contexts/QuestAuthContext';
import questConfig from '../../config/questConfig';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiBrain, FiTrendingUp, FiCheck } = FiIcons;

const QuestOnboardingPage = () => {
  const navigate = useNavigate();
  const { user, getStoredCredentials } = useQuestAuth();
  const [answers, setAnswers] = useState({});
  const [credentials, setCredentials] = useState({ userId: null, token: null });

  useEffect(() => {
    const { userId, token } = getStoredCredentials();
    if (!userId || !token) {
      navigate('/login');
      return;
    }
    setCredentials({ userId, token });
  }, [navigate, getStoredCredentials]);

  const handleOnboardingComplete = () => {
    console.log('Onboarding completed with answers:', answers);
    // Navigate to main application
    navigate('/dashboard');
  };

  const benefits = [
    {
      icon: FiTarget,
      title: "Personalized Learning Path",
      description: "Get customized recommendations based on your goals and experience level"
    },
    {
      icon: FiBrain,
      title: "Mental Toughness Training",
      description: "Build the psychological resilience needed to overcome any challenge"
    },
    {
      icon: FiTrendingUp,
      title: "Proven Business Systems",
      description: "Access step-by-step frameworks used by successful entrepreneurs"
    }
  ];

  const steps = [
    "Tell us about your goals",
    "Share your experience level", 
    "Choose your focus areas",
    "Set your preferences"
  ];

  if (!credentials.userId || !credentials.token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Section - Onboarding Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center space-x-3">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750785079361-blob" 
                alt="DrivenMind Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-2xl font-bold">DrivenMind</span>
                <span className="text-primary-200">.io</span>
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
              Let's Get You <br />
              <span className="text-primary-200">Set Up for Success</span>
            </h1>
            
            <p className="text-xl text-primary-100 mb-12 leading-relaxed">
              We're personalizing your experience to help you achieve your entrepreneurial goals faster.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={benefit.icon} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-primary-100 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white mb-4">What to expect:</h3>
              {steps.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-white">{index + 1}</span>
                  </div>
                  <span className="text-primary-100 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Section - Onboarding Component */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* Mobile Header */}
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
            <h2 className="text-2xl font-bold text-dark-900 mb-2">Let's Get Started!</h2>
            <p className="text-dark-600">We're setting things up for you</p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block mb-8">
            <h2 className="text-3xl font-bold text-dark-900 mb-2">Welcome!</h2>
            <p className="text-dark-600">Let's personalize your experience</p>
          </div>

          {/* Quest Onboarding Component */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <OnBoarding
              userId={credentials.userId}
              token={credentials.token}
              questId={questConfig.QUEST_ONBOARDING_QUESTID}
              answer={answers}
              setAnswer={setAnswers}
              getAnswers={handleOnboardingComplete}
              accent={questConfig.PRIMARY_COLOR}
              singleChoose="modal1"
              multiChoice="modal2"
              style={{
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto'
              }}
            >
              <OnBoarding.Header />
              <OnBoarding.Content />
              <OnBoarding.Footer />
            </OnBoarding>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              This will only take a few minutes
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuestOnboardingPage;