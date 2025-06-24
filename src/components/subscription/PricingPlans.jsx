import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSubscription } from '../../contexts/SubscriptionContext';
import { useAuth } from '../../contexts/AuthContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiStar, FiZap, FiCrown, FiArrowRight } = FiIcons;

const PricingPlans = ({ onSelectPlan, currentPlanId = null }) => {
  const { SUBSCRIPTION_PLANS, loading } = useSubscription();
  const { user } = useAuth();
  const [billingInterval, setBillingInterval] = useState('month');

  const planOrder = ['FREE', 'STARTER', 'PRO', 'ELITE'];
  const orderedPlans = planOrder.map(key => ({ key, ...SUBSCRIPTION_PLANS[key] }));

  const getPlanIcon = (planKey) => {
    switch (planKey) {
      case 'FREE': return FiCheck;
      case 'STARTER': return FiStar;
      case 'PRO': return FiZap;
      case 'ELITE': return FiCrown;
      default: return FiCheck;
    }
  };

  const getPlanColor = (planKey) => {
    switch (planKey) {
      case 'FREE': return 'border-gray-200 bg-white';
      case 'STARTER': return 'border-blue-200 bg-blue-50';
      case 'PRO': return 'border-primary-200 bg-primary-50';
      case 'ELITE': return 'border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50';
      default: return 'border-gray-200 bg-white';
    }
  };

  const getButtonColor = (planKey) => {
    switch (planKey) {
      case 'FREE': return 'bg-gray-600 hover:bg-gray-700';
      case 'STARTER': return 'bg-blue-600 hover:bg-blue-700';
      case 'PRO': return 'bg-primary-600 hover:bg-primary-700';
      case 'ELITE': return 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  const isCurrentPlan = (planKey) => {
    return currentPlanId === planKey.toLowerCase();
  };

  const getDiscountedPrice = (price) => {
    return billingInterval === 'year' ? Math.round(price * 10) : price; // 2 months free on annual
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Billing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setBillingInterval('month')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              billingInterval === 'month'
                ? 'bg-white text-dark-900 shadow-sm'
                : 'text-gray-600 hover:text-dark-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingInterval('year')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              billingInterval === 'year'
                ? 'bg-white text-dark-900 shadow-sm'
                : 'text-gray-600 hover:text-dark-900'
            }`}
          >
            Yearly
            <span className="ml-1 text-xs text-green-600 font-semibold">Save 17%</span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {orderedPlans.map((plan, index) => {
          const Icon = getPlanIcon(plan.key);
          const isPopular = plan.key === 'PRO';
          const price = getDiscountedPrice(plan.price);
          
          return (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative rounded-2xl border-2 p-6 ${getPlanColor(plan.key)} ${
                isPopular ? 'ring-2 ring-primary-500 ring-offset-2' : ''
              }`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Current Plan Badge */}
              {isCurrentPlan(plan.key) && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Current Plan
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                  plan.key === 'ELITE' ? 'bg-gradient-to-br from-purple-600 to-pink-600' :
                  plan.key === 'PRO' ? 'bg-primary-600' :
                  plan.key === 'STARTER' ? 'bg-blue-600' : 'bg-gray-600'
                }`}>
                  <SafeIcon icon={Icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-dark-900">${price}</span>
                  {plan.price > 0 && (
                    <span className="text-gray-600">/{billingInterval}</span>
                  )}
                </div>
                {billingInterval === 'year' && plan.price > 0 && (
                  <div className="text-sm text-green-600 font-medium">
                    Save ${(plan.price * 12) - price} per year
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-dark-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => onSelectPlan && onSelectPlan(plan.key.toLowerCase())}
                disabled={loading || isCurrentPlan(plan.key)}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${getButtonColor(plan.key)} flex items-center justify-center space-x-2`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isCurrentPlan(plan.key) ? (
                  <span>Current Plan</span>
                ) : (
                  <>
                    <span>{plan.price === 0 ? 'Get Started' : 'Upgrade Now'}</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Trial Info */}
              {plan.price > 0 && !isCurrentPlan(plan.key) && (
                <p className="text-xs text-gray-500 text-center mt-3">
                  7-day free trial • Cancel anytime
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Enterprise Option */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-dark-900 mb-4">
            Need Something Custom?
          </h3>
          <p className="text-dark-600 mb-6 max-w-2xl mx-auto">
            For teams, enterprises, or custom requirements, we offer tailored solutions 
            with dedicated support and custom integrations.
          </p>
          <button className="bg-dark-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-800 transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPlans;