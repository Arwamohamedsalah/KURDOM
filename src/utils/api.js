import axios from 'axios';

/**
 * Axios instance ready for future API integrations.
 * Configure baseURL and interceptors when backend is available.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Error]', error.message);
    return Promise.reject(error);
  }
);

export default api;

/**
 * Example contact form submission — ready to connect to backend.
 */
export const submitContactForm = async (formData) => {
  return api.post('/contact', formData);
};
