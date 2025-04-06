import axios from "axios";
import { API_BASE_URL } from "@/constans";
import { ILoginCredentials, IRegisterCredentials } from "@/lib/redux/types";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

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
//         Router.push("/login");
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

export const registerUserApi = async (userData: IRegisterCredentials) =>
  await api.post("/auth/register", userData);

export const validateRegistrationEmailApi = async (otp: string) =>
  await api.get(`/auth/verify_email/${otp}`);

export const loginUserApi = async (userData: ILoginCredentials) =>
  await api.post("/auth/login", userData);

export const logoutUserApi = async () => await api.post("/auth/logout");

export const resendValidationCodeApi = async (id: string) =>
  await api.get(`/auth/resend_email/${id}`);

export const logoutApi = async () => {
  await api.get("/auth/logout");
};
