import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const SubscriptionContext = createContext();

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider = ({ children }) => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethods, setPaymentMethods] = useState([]);

  // Subscription plans
  const SUBSCRIPTION_PLANS = {
    FREE: {
      id: 'free',
      name: 'Free',
      price: 0,
      interval: 'month',
      features: [
        'Access to basic articles',
        'Community forum access',
        'Monthly newsletter',
        'Basic templates'
      ],
      limits: {
        articlesPerMonth: 5,
        templatesAccess: 'basic',
        communityAccess: true,
        supportLevel: 'community'
      }
    },
    STARTER: {
      id: 'starter',
      name: 'Starter',
      price: 29,
      interval: 'month',
      features: [
        'Everything in Free',
        'Unlimited article access',
        'Premium templates',
        'Email support',
        'Monthly group coaching calls'
      ],
      limits: {
        articlesPerMonth: 'unlimited',
        templatesAccess: 'premium',
        communityAccess: true,
        supportLevel: 'email',
        groupCoaching: true
      }
    },
    PRO: {
      id: 'pro',
      name: 'Pro',
      price: 97,
      interval: 'month',
      features: [
        'Everything in Starter',
        'All courses included',
        'Priority support',
        'Monthly 1-on-1 coaching session',
        'Advanced business tools',
        'Custom templates'
      ],
      limits: {
        articlesPerMonth: 'unlimited',
        templatesAccess: 'all',
        coursesAccess: 'all',
        communityAccess: true,
        supportLevel: 'priority',
        oneOnOneCoaching: true,
        businessTools: true
      }
    },
    ELITE: {
      id: 'elite',
      name: 'Elite',
      price: 297,
      interval: 'month',
      features: [
        'Everything in Pro',
        'Weekly 1-on-1 coaching',
        'Direct access to founder',
        'Custom business strategy sessions',
        'Exclusive mastermind group',
        'Done-for-you templates'
      ],
      limits: {
        articlesPerMonth: 'unlimited',
        templatesAccess: 'all',
        coursesAccess: 'all',
        communityAccess: true,
        supportLevel: 'white-glove',
        weeklyCoaching: true,
        founderAccess: true,
        mastermindAccess: true,
        customStrategy: true
      }
    }
  };

  // Mock subscription data
  const mockSubscriptions = [
    {
      id: 'sub_1',
      userId: '1',
      planId: 'elite',
      status: 'active',
      currentPeriodStart: '2024-12-01',
      currentPeriodEnd: '2025-01-01',
      cancelAtPeriodEnd: false,
      trialEnd: null,
      paymentMethodId: 'pm_1'
    },
    {
      id: 'sub_2',
      userId: '2',
      planId: 'pro',
      status: 'active',
      currentPeriodStart: '2024-12-01',
      currentPeriodEnd: '2025-01-01',
      cancelAtPeriodEnd: false,
      trialEnd: null,
      paymentMethodId: 'pm_2'
    },
    {
      id: 'sub_3',
      userId: '3',
      planId: 'starter',
      status: 'active',
      currentPeriodStart: '2024-12-01',
      currentPeriodEnd: '2025-01-01',
      cancelAtPeriodEnd: false,
      trialEnd: null,
      paymentMethodId: 'pm_3'
    }
  ];

  // Mock payment methods
  const mockPaymentMethods = [
    {
      id: 'pm_1',
      type: 'card',
      card: {
        brand: 'visa',
        last4: '4242',
        expMonth: 12,
        expYear: 2025
      },
      isDefault: true
    },
    {
      id: 'pm_2',
      type: 'card',
      card: {
        brand: 'mastercard',
        last4: '5555',
        expMonth: 8,
        expYear: 2026
      },
      isDefault: false
    }
  ];

  useEffect(() => {
    if (user) {
      loadSubscription();
      loadPaymentMethods();
    } else {
      setSubscription(null);
      setPaymentMethods([]);
      setLoading(false);
    }
  }, [user]);

  const loadSubscription = async () => {
    try {
      setLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const userSubscription = mockSubscriptions.find(sub => sub.userId === user.id);
      if (userSubscription) {
        setSubscription({
          ...userSubscription,
          plan: SUBSCRIPTION_PLANS[userSubscription.planId.toUpperCase()]
        });
      } else {
        // Default to free plan
        setSubscription({
          id: null,
          userId: user.id,
          planId: 'free',
          status: 'active',
          plan: SUBSCRIPTION_PLANS.FREE,
          currentPeriodStart: new Date().toISOString().split('T')[0],
          currentPeriodEnd: null,
          cancelAtPeriodEnd: false,
          trialEnd: null,
          paymentMethodId: null
        });
      }
    } catch (error) {
      console.error('Error loading subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadPaymentMethods = async () => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 300));
      setPaymentMethods(mockPaymentMethods);
    } catch (error) {
      console.error('Error loading payment methods:', error);
    }
  };

  const subscribe = async (planId, paymentMethodId = null) => {
    try {
      setLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      const plan = SUBSCRIPTION_PLANS[planId.toUpperCase()];
      if (!plan) {
        throw new Error('Invalid plan selected');
      }

      const newSubscription = {
        id: `sub_${Date.now()}`,
        userId: user.id,
        planId: planId,
        plan: plan,
        status: 'active',
        currentPeriodStart: new Date().toISOString().split('T')[0],
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        cancelAtPeriodEnd: false,
        trialEnd: null,
        paymentMethodId: paymentMethodId
      };

      setSubscription(newSubscription);
      return { success: true, subscription: newSubscription };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const changePlan = async (newPlanId) => {
    try {
      setLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      const newPlan = SUBSCRIPTION_PLANS[newPlanId.toUpperCase()];
      if (!newPlan) {
        throw new Error('Invalid plan selected');
      }

      const updatedSubscription = {
        ...subscription,
        planId: newPlanId,
        plan: newPlan
      };

      setSubscription(updatedSubscription);
      return { success: true, subscription: updatedSubscription };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const cancelSubscription = async (cancelAtPeriodEnd = true) => {
    try {
      setLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const updatedSubscription = {
        ...subscription,
        cancelAtPeriodEnd: cancelAtPeriodEnd,
        status: cancelAtPeriodEnd ? 'active' : 'canceled'
      };

      setSubscription(updatedSubscription);
      return { success: true, subscription: updatedSubscription };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const reactivateSubscription = async () => {
    try {
      setLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const updatedSubscription = {
        ...subscription,
        cancelAtPeriodEnd: false,
        status: 'active'
      };

      setSubscription(updatedSubscription);
      return { success: true, subscription: updatedSubscription };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const addPaymentMethod = async (paymentMethodData) => {
    try {
      setLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      const newPaymentMethod = {
        id: `pm_${Date.now()}`,
        type: 'card',
        card: paymentMethodData.card,
        isDefault: paymentMethods.length === 0
      };

      setPaymentMethods([...paymentMethods, newPaymentMethod]);
      return { success: true, paymentMethod: newPaymentMethod };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const removePaymentMethod = async (paymentMethodId) => {
    try {
      setLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setPaymentMethods(paymentMethods.filter(pm => pm.id !== paymentMethodId));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const setDefaultPaymentMethod = async (paymentMethodId) => {
    try {
      setLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const updatedPaymentMethods = paymentMethods.map(pm => ({
        ...pm,
        isDefault: pm.id === paymentMethodId
      }));

      setPaymentMethods(updatedPaymentMethods);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const hasFeature = (feature) => {
    if (!subscription || !subscription.plan) return false;
    return subscription.plan.limits[feature] !== undefined;
  };

  const canAccess = (resource) => {
    if (!subscription || !subscription.plan) return false;
    
    const limits = subscription.plan.limits;
    
    switch (resource) {
      case 'premium-articles':
        return limits.articlesPerMonth === 'unlimited' || subscription.planId !== 'free';
      case 'courses':
        return limits.coursesAccess === 'all';
      case 'premium-templates':
        return limits.templatesAccess !== 'basic';
      case 'coaching':
        return limits.oneOnOneCoaching || limits.weeklyCoaching;
      case 'priority-support':
        return limits.supportLevel === 'priority' || limits.supportLevel === 'white-glove';
      default:
        return false;
    }
  };

  const getRemainingDays = () => {
    if (!subscription || !subscription.currentPeriodEnd) return null;
    
    const endDate = new Date(subscription.currentPeriodEnd);
    const today = new Date();
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : 0;
  };

  const value = {
    subscription,
    paymentMethods,
    loading,
    SUBSCRIPTION_PLANS,
    subscribe,
    changePlan,
    cancelSubscription,
    reactivateSubscription,
    addPaymentMethod,
    removePaymentMethod,
    setDefaultPaymentMethod,
    hasFeature,
    canAccess,
    getRemainingDays,
    loadSubscription,
    loadPaymentMethods
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};