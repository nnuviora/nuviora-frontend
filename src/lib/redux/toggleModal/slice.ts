import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
  isLogIn: boolean;
  isLogOut: boolean;
  isSignUp: boolean;
  isUserProfile: boolean;
}

const initialState: IModalState = {
  isLogIn: false,
  isLogOut: false,
  isSignUp: false,
  isUserProfile: false,
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
