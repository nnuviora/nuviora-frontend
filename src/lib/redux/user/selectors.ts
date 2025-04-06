import { RootState } from "@lib/redux/store";

export const selectUser = (state: RootState) => state.user.user;
export const selectIsEdit = (state: RootState) => state.user.isEdit;
