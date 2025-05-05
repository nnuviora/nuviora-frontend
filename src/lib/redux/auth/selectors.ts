import { RootState } from "@lib/redux/store";

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectIsResend = (state: RootState) => state.auth.isResend;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectIdUser = (state: RootState) => state.auth.id;

export const selectURL = (state: RootState) => state.auth.url;
