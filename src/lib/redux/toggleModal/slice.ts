import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
  isSignIn: boolean;
  isLogOut: boolean;
  isSignUp: boolean;
  isUserProfile: boolean;
  isPasswordRecoveryEmail: boolean;
  isPasswordRecoveryPassword: boolean;
  isValidateOTP: boolean;
}

const initialState: IModalState = {
  isSignIn: false,
  isLogOut: false,
  isSignUp: false,
  isUserProfile: false,
  isPasswordRecoveryEmail: false,
  isPasswordRecoveryPassword: false,
  isValidateOTP: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<keyof IModalState>) => {
      state[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<keyof IModalState>) => {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
