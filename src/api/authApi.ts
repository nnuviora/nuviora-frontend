import axios from "axios";
import { API_BASE_URL } from "@/constans";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export interface Iregister {
  email: string;
  hash_password: string;
  repeat_password: string;
}
// api.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     const token = localStorage.getItem("accessToken");
//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error),
// );

// api.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config as AxiosRequestConfig & {
//       _retry?: boolean;
//     };
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const response = await store.dispatch(refreshAccessToken()).unwrap();
//         localStorage.setItem("accessToken", response.access_token);
//         if (originalRequest.headers) {
//           originalRequest.headers.Authorization = `Bearer ${response.access_token}`;
//         }
//         return api(originalRequest);
//       } catch (refreshError) {
//         store.dispatch(logoutUser());
//         Router.push("/login"); // Редирект на страницу логина
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

export const registerUserApi = (userData: Iregister) =>
  api.post("/auth/register", userData);

export const validateRegistrationEmailApi = (otp: string) =>
  api.get(`/auth/register/${otp}`);

export const loginUserApi = (credentials: Record<string, string>) =>
  api.post("/login", credentials);
export const logoutUserApi = () => api.post("/logout");
