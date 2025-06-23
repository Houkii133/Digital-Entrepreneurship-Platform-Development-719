import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBrain, FiTarget, FiTrendingUp, FiShield, FiBookOpen, FiUsers } = FiIcons;

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: FiBrain,
      title: "Mental Toughness",
      description: "Build unshakeable confidence and resilience to overcome any obstacle in your entrepreneurial journey."
    },
    {
      icon: FiTarget,
      title: "Strategic Focus",
      description: "Learn to prioritize what matters most and avoid the distractions that kill 99% of startups."
    },
    {
      icon: FiTrendingUp,
      title: "Proven Systems",
      description: "Step-by-step frameworks used by successful entrepreneurs to scale from zero to seven figures."
    },
    {
      icon: FiShield,
      title: "Survival Tactics",
      description: "Master the art of staying alive in business during the critical first 5 years when most fail."
    },
    {
      icon: FiBookOpen,
      title: "Knowledge Hub",
      description: "Access our comprehensive library of resources, templates, and actionable insights."
    },
    {
      icon: FiUsers,
      title: "Community",
      description: "Connect with like-minded entrepreneurs who share your drive and determination to succeed."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            Everything You Need to Survive & Thrive
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            We don't just teach theory. We provide the mental frameworks, practical systems, 
            and survival strategies that separate the 1% who make it from the 99% who quit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <SafeIcon 
                  icon={feature.icon} 
                  className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" 
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-dark-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;