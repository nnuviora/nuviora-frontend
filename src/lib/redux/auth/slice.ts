import { createSlice } from "@reduxjs/toolkit";

import { IAuthState } from "../types";

const initialState: IAuthState = {
  accessToken: "",
  isLoading: false,
  error: null,
  isResend: false,
  isAuthenticated: false,
  isVerify: false,
  id: "",
  isPasswordChange: false,
  url: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addId: (state, action) => {
      state.id = action.payload;
    },

    clearId: (state) => {
      state.id = "";
    },

    addAuthenticated: (state) => {
      state.isAuthenticated = true;
    },

    removeAuthenticated: (state) => {
      state.isAuthenticated = false;
    },

    addVerify: (state) => {
      state.isVerify = true;
    },

    removeVerify: (state) => {
      state.isVerify = false;
    },

    addPasswordChange: (state) => {
      state.isPasswordChange = true;
    },

    removePasswordChange: (state) => {
      state.isPasswordChange = false;
    },

    resendEmail: (state) => {
      state.isResend = true;
    },

    removeResendEmail: (state) => {
      state.isResend = false;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  addId,
  clearId,
  addAuthenticated,
  removeAuthenticated,
  addVerify,
  removeVerify,
  addPasswordChange,
  // TODO Перевірити  removePasswordChange,
  removePasswordChange,
  resendEmail,
  removeResendEmail,
  clearError, // TODO Видалити
} = authSlice.actions;

export default authSlice.reducer;
