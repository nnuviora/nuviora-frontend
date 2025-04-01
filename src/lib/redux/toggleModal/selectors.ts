import { RootState } from "@lib/redux/store";

export const selectIsSignIn = (state: RootState) => state.modal.isSignIn;
export const selectIsSignUp = (state: RootState) => state.modal.isSignUp;
export const selectIsUserProfile = (state: RootState) =>
  state.modal.isUserProfile;
export const selectIsLogOut = (state: RootState) => state.modal.isLogOut;
export const selectIsPasswordRecoveryEmail = (state: RootState) =>
  state.modal.isPasswordRecoveryEmail;
export const selectIsPasswordRecoveryPassword = (state: RootState) =>
  state.modal.isPasswordRecoveryPassword;
export const selectIsValidateOTP = (state: RootState) =>
  state.modal.isValidateOTP;
