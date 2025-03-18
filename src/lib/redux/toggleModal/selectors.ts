import { RootState } from "@lib/redux/store";


export const selectIsLogIn = (state: RootState) => state.modal.isLogIn;
export const selectIsSignUp = (state: RootState) => state.modal.isSignUp;
export const selectIsUserProfile = (state: RootState) => state.modal.isUserProfile;