import axios from "axios";
import { API_BASE_URL } from "@/constans";
import { ILoginCredentials, IRegisterCredentials } from "@/lib/redux/types";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const registerUserApi = async (userData: IRegisterCredentials) =>
  await api.post("/auth/register", userData);

export const validateRegistrationEmailApi = async (otp: string) =>
  await api.get(`/auth/verify_email/${otp}`);

export const loginUserApi = async (userData: ILoginCredentials) =>
  await api.post("/auth/login", userData);

export const logoutApi = async () => await api.get("/auth/logout");

export const resendValidationCodeApi = async (id: string) =>
  await api.get(`/auth/resend_email/${id}`);

export const refreshAccessTokenApi = async () =>
  await api.post("/auth/refresh_access");
