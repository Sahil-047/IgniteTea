// Backend API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const config = {
  API_BASE_URL,
  endpoints: {
    // Auth endpoints
    auth: {
      userRegister: `${API_BASE_URL}/auth/user/register`,
      userLogin: `${API_BASE_URL}/auth/user/login`,
      userMe: `${API_BASE_URL}/auth/user/me`,
      employeeRegister: `${API_BASE_URL}/auth/employee/register`,
      employeeLogin: `${API_BASE_URL}/auth/employee/login`,
      employeeMe: `${API_BASE_URL}/auth/employee/me`,
    },
    health: `${API_BASE_URL}/health`,
  },
};

export default config;
