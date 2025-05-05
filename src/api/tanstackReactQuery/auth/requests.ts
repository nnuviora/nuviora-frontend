import { api } from "@/api/authApi";
import { ILoginCredentials, IRegisterCredentials } from "@/lib/redux/types";
import { IPasswordRecoveryCredentials } from "@/types";

export type GenericResponse = {
  message?: string;
  [key: string]: unknown;
};
export interface GenericValidateResponse {
  access_token: string;
}

export const registerUserApi = async (userData: IRegisterCredentials) =>
  await api.post("/auth/register", userData);

export const fetchGoogleAuthApi = async () =>
  await api.get(`/auth/google_auth`);

export const fetchGoogleCallbackApi = async (code: string) =>
  api.get(`/auth/google/callback?code=${code}`);

export const validateRegistrationEmailApi = async (otp: string) =>
  await api.get<GenericValidateResponse>(`/auth/verify_email/${otp}`);

export const resendValidationCodeApi = async (id: string) =>
  await api.get(`/auth/resend_email/${id}`);

export const loginUserApi = async (userData: ILoginCredentials) =>
  await api.post("/auth/login", userData);

export const logoutApi = async () => await api.get("/auth/logout");

export const refreshAccessTokenApi = async () =>
  await api.post("/auth/refresh_access");

export const requestRecoveryPasswordApi = async (
  email: Pick<ILoginCredentials, "email">,
) => await api.post("/auth/forgot_password", email);

export const verifyEmailApi = async (otp: string) =>
  await api.get<GenericResponse>(`/auth/forgot_password/${otp}`);

export const changePasswordApi = async (data: IPasswordRecoveryCredentials) =>
  await api.post(`/auth/forgot_password/change`, data);
