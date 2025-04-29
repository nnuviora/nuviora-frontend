import { IModalState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IModalState = {
  isSignIn: false,
  isLogOut: false,
  isSignUp: false,
  isUserProfile: false,
  isPasswordRecoveryEmail: false,
  isPasswordRecoveryPassword: false,
  isValidateOTP: false,
  isVerifyOTP: false,
  isMenuOpen: false,
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
