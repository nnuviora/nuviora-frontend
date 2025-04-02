import { RootState } from "@lib/redux/store";

export const selectPendingUserId = (state: RootState) =>
  state.auth.pendingUserId;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
