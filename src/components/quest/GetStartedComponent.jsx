import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiArrowRight, FiTarget, FiBrain, FiTrendingUp, FiPlay } = FiIcons;

const GetStartedComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    {
      id: 'welcome',
      title: 'Welcome to Your Entrepreneurial Journey',
      description: 'Let\'s get to know you better so we can provide personalized recommendations.',
      type: 'welcome'
    },
    {
      id: 'experience',
      title: 'What\'s your entrepreneurial experience?',
      description: 'This helps us tailor our recommendations to your level.',
      type: 'choice',
      options: [
        { value: 'beginner', label: 'Complete beginner - I have an idea but haven\'t started yet', icon: FiTarget },
        { value: 'early', label: 'Early stage - I\'ve started but struggling to gain traction', icon: FiBrain },
        { value: 'growing', label: 'Growing - I have a business but want to scale faster', icon: FiTrendingUp }
      ]
    },
    {
      id: 'challenge',
      title: 'What\'s your biggest challenge right now?',
      description: 'Understanding your main obstacle helps us recommend the right resources.',
      type: 'choice',
      options: [
        { value: 'mindset', label: 'Mental toughness and staying motivated' },
        { value: 'strategy', label: 'Business strategy and planning' },
        { value: 'marketing', label: 'Marketing and finding customers' },
        { value: 'productivity', label: 'Time management and productivity' }
      ]
    },
    {
      id: 'goals',
      title: 'What\'s your primary goal for the next 12 months?',
      description: 'This helps us recommend the most relevant content and products.',
      type: 'choice',
      options: [
        { value: 'launch', label: 'Launch my first business' },
        { value: 'revenue', label: 'Reach my first $10K in revenue' },
        { value: 'scale', label: 'Scale to $100K+ in revenue' },
        { value: 'mindset', label: 'Build unshakeable mental toughness' }
      ]
    },
    {
      id: 'recommendations',
      title: 'Your Personalized Recommendations',
      description: 'Based on your responses, here\'s what we recommend:',
      type: 'results'
    }
  ];

  const handleResponse = (stepId, value) => {
    setUserResponses(prev => ({ ...prev, [stepId]: value }));
    
    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 500);
    }
  };

  const getRecommendations = () => {
    const { experience, challenge, goals } = userResponses;
    
    const recommendations = [];
    
    if (experience === 'beginner') {
      recommendations.push({
        type: 'E-book',
        title: 'Start Before You\'re Ready',
        description: 'Perfect for overcoming perfectionism and taking your first steps.',
        price: '$29'
      });
    }
    
    if (challenge === 'mindset' || goals === 'mindset') {
      recommendations.push({
        type: 'Guide',
        title: 'The No-Quit Blueprint',
        description: 'Build unshakeable mental resilience for entrepreneurial success.',
        price: '$49'
      });
    }
    
    if (experience === 'early' || experience === 'growing') {
      recommendations.push({
        type: 'Course',
        title: 'Zero to 100K: Your First 5 Years',
        description: 'Complete system for surviving and thriving in business.',
        price: '$197'
      });
    }
    
    return recommendations;
  };

  const renderStep = (step) => {
    switch (step.type) {
      case 'welcome':
        return (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiPlay} className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900 mb-4">{step.title}</h2>
            <p className="text-dark-600 mb-8 max-w-md mx-auto">{step.description}</p>
            <button
              onClick={() => setCurrentStep(1)}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Let's Get Started</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </button>
          </div>
        );

      case 'choice':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-900 mb-4 text-center">{step.title}</h2>
            <p className="text-dark-600 mb-8 text-center">{step.description}</p>
            <div className="space-y-4">
              {step.options.map((option, index) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleResponse(step.id, option.value)}
                  className="w-full p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-600 hover:bg-primary-50 transition-all duration-200 text-left group"
                >
                  <div className="flex items-start space-x-4">
                    {option.icon && (
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-200">
                        <SafeIcon icon={option.icon} className="w-6 h-6 text-primary-600 group-hover:text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors duration-200">
                        {option.label}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 'results':
        const recommendations = getRecommendations();
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">{step.title}</h2>
              <p className="text-dark-600">{step.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="text-sm text-primary-600 font-medium mb-2">{rec.type}</div>
                  <h3 className="text-lg font-bold text-dark-900 mb-2">{rec.title}</h3>
                  <p className="text-dark-600 mb-4 text-sm">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-dark-900">{rec.price}</span>
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => window.location.href = '/products'}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>View All Products</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-dark-600">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-medium text-dark-600">
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-primary-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderStep(steps[currentStep])}
      </motion.div>
    </div>
  );
};

export default GetStartedComponent;