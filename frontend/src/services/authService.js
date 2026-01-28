import config from '../config/config.js';

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// Set token in localStorage
const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Remove token from localStorage
const removeToken = () => {
  localStorage.removeItem('token');
};

// Get auth headers
const getAuthHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// User Authentication
export const authService = {
  // User Register
  registerUser: async (userData) => {
    try {
      const response = await fetch(config.endpoints.auth.userRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      if (data.data?.token) {
        setToken(data.data.token);
      }

      return data;
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  },

  // User Login
  loginUser: async (email, password) => {
    try {
      const response = await fetch(config.endpoints.auth.userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.data?.token) {
        setToken(data.data.token);
      }

      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // Get Current User
  getCurrentUser: async () => {
    try {
      const response = await fetch(config.endpoints.auth.userMe, {
        method: 'GET',
        headers: getAuthHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to get user');
      }

      return data;
    } catch (error) {
      console.error('Get current user error:', error);
      throw error;
    }
  },

  // Employee Login
  loginEmployee: async (email, password) => {
    try {
      const response = await fetch(config.endpoints.auth.employeeLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.data?.token) {
        setToken(data.data.token);
      }

      return data;
    } catch (error) {
      console.error('Employee login error:', error);
      throw error;
    }
  },

  // Logout
  logout: () => {
    removeToken();
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!getToken();
  },

  // Get token
  getToken,
};
