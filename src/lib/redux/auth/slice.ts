import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  logInUser,
  logOut,
  registerUser,
  validateRegistrationEmail,
  resendValidationCode,
} from "@lib/redux/auth/operations";
import { IAuthResponse, IAuthState, IRegistrationResponse } from "../types";
// import { act } from "react";

const handlePending = (state: IAuthState) => {
  state.isLoading = true;
  state.error = null;
  state.isResend = false;
  state.isAuthenticated = false;
};

const handleRejected = (state: IAuthState, action: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.isResend = false;
  state.isAuthenticated = false;
  state.error =
    typeof action.payload === "string" ? action.payload : "Unknown error";
};

const initialState: IAuthState = {
  user: null,
  accessToken: "",
  pendingUserId: "",
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isResend: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetPendingUserId: (state) => {
      // state.pendingUserId = "";
      state.isLoading = false;
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      registerUser.fulfilled,
      (state: IAuthState, action: PayloadAction<IRegistrationResponse>) => {
        state.isLoading = false;
        state.error = null;
        state.pendingUserId = action.payload.id;
      },
    );

    builder.addCase(
      logInUser.fulfilled,
      (state: IAuthState, action: PayloadAction<IAuthResponse>) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.access_token;
        state.isLoading = false;
        state.error = null;
        state.isAuthenticated = true;
        state.isLoggedIn = true;
      },
    );

    builder.addCase(
      validateRegistrationEmail.fulfilled,
      (state: IAuthState, action: PayloadAction<IAuthResponse>) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = action.payload.access_token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      },
    );

    builder.addCase(resendValidationCode.fulfilled, (state: IAuthState) => {
      state.isLoading = false;
      state.error = null;
      state.isResend = true;
    });

    builder
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })

      .addMatcher(
        isAnyOf(
          registerUser.pending,
          logInUser.pending,
          validateRegistrationEmail.pending,
          resendValidationCode.pending,
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          logInUser.rejected,
          logOut.rejected,
          validateRegistrationEmail.rejected,
          resendValidationCode.rejected,
        ),
        handleRejected,
      );
  },
});

export const { resetPendingUserId, clearError } = authSlice.actions;

export default authSlice.reducer;
