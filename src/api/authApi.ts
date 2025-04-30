import axios from "axios";

import { ILoginCredentials } from "@/lib/redux/types";
import { IPasswordRecoveryCredentials } from "@/types";
import { API_BASE_URL } from "@/api/axios/apiUrl";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// export const registerUserApi = async (userData: IRegisterCredentials) =>
//   await api.post("/auth/register", userData);

// export const validateRegistrationEmailApi = async (otp: string) =>
//   await api.get(`/auth/verify_email/${otp}`);

export const loginUserApi = async (userData: ILoginCredentials) =>
  await api.post("/auth/login", userData);

export const logoutApi = async () => await api.get("/auth/logout");

// export const resendValidationCodeApi = async (id: string) =>
//   await api.get(`/auth/resend_email/${id}`);

export const refreshAccessTokenApi = async () =>
  await api.post("/auth/refresh_access");

export const requestRecoveryPasswordApi = async (
  email: Pick<ILoginCredentials, "email">,
) => await api.post("/auth/forgot_password", email);

export const verifyEmailApi = async (otp: string) =>
  await api.get(`/auth/forgot_password/${otp}`);

export const changePasswordApi = async (data: IPasswordRecoveryCredentials) =>
  await api.post(`/auth/forgot_password/change`, data);

// export const fetchGoogleAuthApi = async () =>
//   await api.get(`/auth/google_auth`);

// export const fetchGoogleCallbackApi = async (code: string) =>
//   api.get(`/auth/google/callback?code=${code}`);
