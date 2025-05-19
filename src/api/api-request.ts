import { enviroments } from '@/constants/enviroments';
import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: enviroments.BASE_API_URL,
  timeout: 10000,
  headers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export const apiRequest = {
  get: (url: string, config: AxiosRequestConfig = {}) =>
    axiosInstance.get(url, config),
  post: (url: string, data = {}, config: AxiosRequestConfig = {}) =>
    axiosInstance.post(url, data, config),
  put: (url: string, data = {}, config: AxiosRequestConfig = {}) =>
    axiosInstance.put(url, data, config),
  patch: (url: string, data = {}, config: AxiosRequestConfig = {}) =>
    axiosInstance.patch(url, data, config),
  create: (url: string, data = {}, config: AxiosRequestConfig = {}) =>
    axiosInstance.post(url, data, config),
};
