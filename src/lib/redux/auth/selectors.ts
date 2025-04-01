import { RootState } from "@lib/redux/store";

export const selectPendingUserId = (state: RootState) =>
  state.auth.pendingUserId;
