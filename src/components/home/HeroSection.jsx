import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiPlay, FiStar } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Social Proof */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">Trusted by 10,000+ entrepreneurs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Master Yourself.</span>
              <span className="block text-primary-400">Build Your Empire.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From Idea to Empire — Learn how to build the mental strength and business skills to not just start a company, but survive and thrive in the first 5 years. Start your transformation today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/get-started"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started Now</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2">
                <SafeIcon icon={FiPlay} className="w-5 h-5" />
                <span>Watch Story</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
              <div>
                <div className="text-2xl font-bold text-primary-400">10K+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400">5 Years</div>
                <div className="text-sm text-gray-400">Survival Focus</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8">
                <div className="w-full h-full bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <SafeIcon icon={FiPlay} className="w-10 h-10 text-primary-600" />
                    </div>
                    <p className="text-white font-medium">Success Story</p>
                    <p className="text-white/70 text-sm">From $0 to $1M</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                New Course Available
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-dark-900 px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                ⚡ Limited Time Offer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;