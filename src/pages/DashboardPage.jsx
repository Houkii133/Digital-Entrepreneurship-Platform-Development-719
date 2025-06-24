import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useQuestAuth } from '../contexts/QuestAuthContext';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiBook, FiTarget, FiTrendingUp, FiLogOut } = FiIcons;

const DashboardPage = () => {
  const { user, logout } = useQuestAuth();

  const handleLogout = () => {
    logout();
  };

  const dashboardCards = [
    {
      icon: FiBook,
      title: "My Learning Path",
      description: "Continue your personalized learning journey",
      color: "bg-blue-500"
    },
    {
      icon: FiTarget,
      title: "Goals & Progress",
      description: "Track your entrepreneurial milestones",
      color: "bg-green-500"
    },
    {
      icon: FiTrendingUp,
      title: "Business Metrics",
      description: "Monitor your business growth",
      color: "bg-purple-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard | DrivenMind.io</title>
        <meta name="description" content="Your personalized entrepreneurial dashboard" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold text-dark-900">
                Welcome to your Dashboard
              </h1>
              <p className="text-dark-600 mt-2">
                Your personalized hub for entrepreneurial growth
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              <SafeIcon icon={FiLogOut} className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </motion.div>

          {/* User Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6 mb-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiUser} className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-900">
                  User ID: {user?.userId}
                </h2>
                <p className="text-dark-600">
                  {user?.newUser ? 'New User' : 'Returning User'}
                </p>
                {user?.loginTime && (
                  <p className="text-sm text-gray-500">
                    Last login: {new Date(user.loginTime).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                  <SafeIcon icon={card.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-dark-600">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Continue Your Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore our products and resources to accelerate your entrepreneurial success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Browse Products
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                Visit Knowledge Hub
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;