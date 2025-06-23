import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiArrowRight } = FiIcons;

const ProtectedRoute = ({ children, requiredRole, resource, fallback }) => {
  const { user, hasRole, canAccess } = useAuth();

  // Check if user is logged in
  if (!user) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiLock} className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-dark-900 mb-4">
            Authentication Required
          </h2>
          <p className="text-dark-600 mb-6">
            Please sign in to access this content.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Go to Homepage</span>
            <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  // Check role-based access
  if (requiredRole && !hasRole(requiredRole)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiLock} className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-dark-900 mb-4">
            Access Denied
          </h2>
          <p className="text-dark-600 mb-6">
            You don't have permission to access this content. Your current role: <span className="font-semibold capitalize">{user.role}</span>
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  // Check resource-based access
  if (resource && !canAccess(resource)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiLock} className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-dark-900 mb-4">
            Upgrade Required
          </h2>
          <p className="text-dark-600 mb-6">
            This content requires a higher access level. Please upgrade your account to continue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.href = '/products'}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Upgrade Now
            </button>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
            >
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;