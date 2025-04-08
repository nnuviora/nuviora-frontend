import { RootState } from "@lib/redux/store";

export const selectPendingUserId = (state: RootState) =>
  state.auth.pendingUserId;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectIsResend = (state: RootState) => state.auth.isResend;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.accessToken;
