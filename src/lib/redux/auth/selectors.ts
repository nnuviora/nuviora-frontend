import { RootState } from "@lib/redux/store";

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectIsResend = (state: RootState) => state.auth.isResend;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectToken = (state: RootState) => state.auth.accessToken;
export const selectIdUser = (state: RootState) => state.auth.id;
export const selectIsVerify = (state: RootState) => state.auth.isVerify;
export const selectIsPasswordChange = (state: RootState) =>
  state.auth.isPasswordChange;
export const selectURL = (state: RootState) => state.auth.url;
