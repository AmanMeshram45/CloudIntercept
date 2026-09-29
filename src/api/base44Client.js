import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const base44 = {
  // Authentication
  auth: {
    login: async (credentials) => {
      const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
      return response.data;
    },
    register: async (userData) => {
      const response = await axios.post(`${API_URL}/api/auth/register`, userData);
      return response.data;
    },
    logout: async () => {
      const response = await axios.post(`${API_URL}/api/auth/logout`);
      return response.data;
    },
    getCurrentUser: async () => {
      const response = await axios.get(`${API_URL}/api/auth/me`);
      return response.data;
    }
  },
  
  // Dashboard data
  dashboard: {
    getMetrics: async () => {
      const response = await axios.get(`${API_URL}/api/dashboard/metrics`);
      return response.data;
    },
    getSecurityEvents: async () => {
      const response = await axios.get(`${API_URL}/api/dashboard/security-events`);
      return response.data;
    },
    getThreatDistribution: async () => {
      const response = await axios.get(`${API_URL}/api/dashboard/threat-distribution`);
      return response.data;
    }
  },
  
  // Generic request method
  request: async (config) => {
    const response = await axios({
      ...config,
      baseURL: API_URL
    });
    return response.data;
  }
};
