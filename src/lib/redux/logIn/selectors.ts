import { RootState } from "@lib/redux/store";

export const selectLogIn = (state: RootState) => state.login.isLogIn;
