import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import GetStartedComponent from '../components/quest/GetStartedComponent';

const GetStartedPage = () => {
  return (
    <>
      <Helmet>
        <title>Get Started - Your Entrepreneurial Journey Begins | DrivenMind.io</title>
        <meta name="description" content="Start your entrepreneurial journey with our guided onboarding process. Get personalized recommendations and resources to build your empire." />
        <meta name="keywords" content="get started, entrepreneur onboarding, business journey, startup guide" />
        <link rel="canonical" href="https://drivenmind.io/get-started" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-dark-900 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Welcome to Your Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's get you started on the path to building your empire. Complete the steps below to unlock personalized resources and recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GetStarted Component */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GetStartedComponent />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GetStartedPage;