import { api } from "@/api/authApi";
import { IRegisterCredentials } from "@/lib/redux/types";

export const registerUserApi = async (userData: IRegisterCredentials) =>
  await api.post("/auth/register", userData);

export const fetchGoogleAuthApi = async () =>
  await api.get(`/auth/google_auth`);

export const fetchGoogleCallbackApi = async (code: string) =>
  api.get(`/auth/google/callback?code=${code}`);

export const validateRegistrationEmailApi = async (otp: string) =>
  await api.get(`/auth/verify_email/${otp}`);

export const resendValidationCodeApi = async (id: string) =>
  await api.get(`/auth/resend_email/${id}`);
