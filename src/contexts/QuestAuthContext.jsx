import React, { createContext, useContext, useState, useEffect } from 'react';

const QuestAuthContext = createContext();

export const useQuestAuth = () => {
  const context = useContext(QuestAuthContext);
  if (!context) {
    throw new Error('useQuestAuth must be used within a QuestAuthProvider');
  }
  return context;
};

export const QuestAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication
    const savedUser = localStorage.getItem('quest_user');
    const savedUserId = localStorage.getItem('quest_userId');
    const savedToken = localStorage.getItem('quest_token');

    if (savedUser && savedUserId && savedToken) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        // Clear corrupted data
        localStorage.removeItem('quest_user');
        localStorage.removeItem('quest_userId');
        localStorage.removeItem('quest_token');
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = ({ userId, token, newUser, userData }) => {
    // Store authentication data
    localStorage.setItem('quest_userId', userId);
    localStorage.setItem('quest_token', token);
    localStorage.setItem('quest_user', JSON.stringify(userData || { userId, newUser }));
    
    setUser(userData || { userId, newUser });
    setIsAuthenticated(true);

    return { userId, token, newUser };
  };

  const logout = () => {
    localStorage.removeItem('quest_user');
    localStorage.removeItem('quest_userId');
    localStorage.removeItem('quest_token');
    setUser(null);
    setIsAuthenticated(false);
  };

  const getStoredCredentials = () => {
    return {
      userId: localStorage.getItem('quest_userId'),
      token: localStorage.getItem('quest_token')
    };
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    handleLogin,
    logout,
    getStoredCredentials
  };

  return (
    <QuestAuthContext.Provider value={value}>
      {children}
    </QuestAuthContext.Provider>
  );
};