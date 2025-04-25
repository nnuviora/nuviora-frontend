import { RootState } from "@lib/redux/store";

export const selectIsEdit = (state: RootState) => state.user.isEdit;
