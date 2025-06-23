import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user roles
  const USER_ROLES = {
    ADMIN: 'admin',
    MODERATOR: 'moderator',
    PREMIUM: 'premium',
    FREE: 'free'
  };

  // Mock users database
  const mockUsers = [
    {
      id: '1',
      email: 'admin@drivenmind.io',
      password: 'admin123',
      name: 'Admin User',
      role: USER_ROLES.ADMIN,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      joinDate: '2024-01-01',
      lastLogin: '2024-12-20',
      isActive: true
    },
    {
      id: '2',
      email: 'moderator@drivenmind.io',
      password: 'mod123',
      name: 'Moderator User',
      role: USER_ROLES.MODERATOR,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=100&h=100&fit=crop&crop=face',
      joinDate: '2024-02-01',
      lastLogin: '2024-12-19',
      isActive: true
    },
    {
      id: '3',
      email: 'premium@example.com',
      password: 'premium123',
      name: 'Premium User',
      role: USER_ROLES.PREMIUM,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      joinDate: '2024-03-01',
      lastLogin: '2024-12-18',
      isActive: true
    },
    {
      id: '4',
      email: 'user@example.com',
      password: 'user123',
      name: 'Free User',
      role: USER_ROLES.FREE,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      joinDate: '2024-04-01',
      lastLogin: '2024-12-17',
      isActive: true
    }
  ];

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('drivenmind_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('drivenmind_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }

      if (!foundUser.isActive) {
        throw new Error('Account is deactivated');
      }

      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
        avatar: foundUser.avatar,
        joinDate: foundUser.joinDate,
        lastLogin: new Date().toISOString().split('T')[0]
      };

      setUser(userData);
      localStorage.setItem('drivenmind_user', JSON.stringify(userData));
      
      return { success: true, user: userData };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email === userData.email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      const newUser = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        role: USER_ROLES.FREE,
        avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`,
        joinDate: new Date().toISOString().split('T')[0],
        lastLogin: new Date().toISOString().split('T')[0],
        isActive: true
      };

      // Add to mock database
      mockUsers.push({ ...newUser, password: userData.password });

      const userSession = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
        avatar: newUser.avatar,
        joinDate: newUser.joinDate,
        lastLogin: newUser.lastLogin
      };

      setUser(userSession);
      localStorage.setItem('drivenmind_user', JSON.stringify(userSession));
      
      return { success: true, user: userSession };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('drivenmind_user');
  };

  const updateProfile = async (profileData) => {
    try {
      setLoading(true);
      
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser = { ...user, ...profileData };
      setUser(updatedUser);
      localStorage.setItem('drivenmind_user', JSON.stringify(updatedUser));
      
      return { success: true, user: updatedUser };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const hasRole = (requiredRole) => {
    if (!user) return false;
    
    const roleHierarchy = {
      [USER_ROLES.FREE]: 1,
      [USER_ROLES.PREMIUM]: 2,
      [USER_ROLES.MODERATOR]: 3,
      [USER_ROLES.ADMIN]: 4
    };
    
    return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
  };

  const canAccess = (resource) => {
    if (!user) return false;
    
    const permissions = {
      'admin-dashboard': [USER_ROLES.ADMIN],
      'user-management': [USER_ROLES.ADMIN],
      'content-management': [USER_ROLES.ADMIN, USER_ROLES.MODERATOR],
      'premium-content': [USER_ROLES.ADMIN, USER_ROLES.MODERATOR, USER_ROLES.PREMIUM],
      'basic-content': [USER_ROLES.ADMIN, USER_ROLES.MODERATOR, USER_ROLES.PREMIUM, USER_ROLES.FREE]
    };
    
    return permissions[resource]?.includes(user.role) || false;
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    hasRole,
    canAccess,
    USER_ROLES
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};