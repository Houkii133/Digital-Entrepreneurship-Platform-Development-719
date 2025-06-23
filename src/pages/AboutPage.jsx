import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiHeart, FiTrendingUp, FiUsers, FiAward, FiArrowRight } = FiIcons;

const AboutPage = () => {
  const stats = [
    { number: "10,000+", label: "Entrepreneurs Trained" },
    { number: "95%", label: "Success Rate" },
    { number: "$50M+", label: "Revenue Generated" },
    { number: "50+", label: "Countries Reached" }
  ];

  const values = [
    {
      icon: FiTarget,
      title: "Results Over Rhetoric",
      description: "We focus on what actually works, not what sounds good. Every strategy we teach has been battle-tested in the real world."
    },
    {
      icon: FiHeart,
      title: "Mental Toughness First",
      description: "Success starts in the mind. We prioritize building unshakeable mental resilience before anything else."
    },
    {
      icon: FiTrendingUp,
      title: "Long-Term Thinking",
      description: "We're not interested in get-rich-quick schemes. We help you build sustainable businesses that last decades."
    },
    {
      icon: FiUsers,
      title: "Community Over Competition",
      description: "We believe in lifting each other up. Our community is built on collaboration, not competition."
    }
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      business: "DataFlow AI",
      result: "$0 to $2M ARR in 18 months",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=300&h=300&fit=crop&crop=face",
      story: "I was ready to quit after 18 months of struggle, but DrivenMind's mental frameworks helped me push through. The focus on mental toughness was exactly what I needed."
    },
    {
      name: "Marcus Rodriguez",
      business: "Peak Performance Gear",
      result: "400% revenue growth in 8 months",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      story: "The 'No-Quit Blueprint' changed everything for me. It's not just motivation - it's a systematic approach to building mental toughness that actually works."
    },
    {
      name: "Jennifer Walsh",
      business: "Walsh Consulting",
      result: "First $100K year achieved",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      story: "I've bought countless business courses, but nothing compares to DrivenMind. The focus on survival and mental strength is what sets it apart from everything else."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About DrivenMind.io - Master Yourself. Build Your Empire.</title>
        <meta name="description" content="Learn about DrivenMind.io's mission to help entrepreneurs build mental toughness and business skills. Our story, values, and success stories from 10,000+ entrepreneurs." />
        <meta name="keywords" content="about drivenmind, entrepreneur training, business mentorship, startup success stories" />
        <link rel="canonical" href="https://drivenmind.io/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-dark-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Mission: Build Unbreakable Entrepreneurs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We exist to solve the biggest problem in entrepreneurship: the 99% quit rate. 
              Through mental toughness training and practical business systems, we help driven 
              individuals not just start businesses, but survive and thrive for decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Why DrivenMind Exists
              </h2>
              <div className="space-y-4 text-dark-600 leading-relaxed">
                <p>
                  After watching countless talented entrepreneurs quit within their first five years, 
                  we realized the problem wasn't lack of business knowledge—it was lack of mental preparation.
                </p>
                <p>
                  Most business education focuses on tactics and strategies but ignores the psychological 
                  warfare that happens inside every entrepreneur's head. The self-doubt, the comparison trap, 
                  the voice that says "you're not ready."
                </p>
                <p>
                  We created DrivenMind to fill this gap. We combine proven business systems with 
                  mental toughness training to create entrepreneurs who don't just start businesses—they 
                  build empires that last.
                </p>
                <p>
                  Our approach is simple: Master yourself first, then master the market.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Entrepreneurs working together"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={value.icon} className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Success Stories That Inspire Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These are the entrepreneurs who didn't quit. Who pushed through the hard times 
              and built something extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dark-800 p-8 rounded-xl border border-dark-700"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{story.name}</div>
                    <div className="text-sm text-gray-400">{story.business}</div>
                    <div className="text-sm text-primary-400 font-medium">{story.result}</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "{story.story}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-8">
              Recognized by Leading Publications
            </h3>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <div className="font-bold text-xl">Forbes</div>
              <div className="font-bold text-xl">Entrepreneur</div>
              <div className="font-bold text-xl">Inc. Magazine</div>
              <div className="font-bold text-xl">Fast Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Join the 1%?</h3>
            <p className="text-lg opacity-90 mb-8">
              Stop being part of the 99% who quit. Start building the mental toughness 
              and business skills you need to create lasting success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your Journey</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;