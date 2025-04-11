import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  logInUser,
  logOut,
  registerUser,
  validateRegistrationEmail,
  resendValidationCode,
  refreshAccessToken,
  recoveryPassword,
  changePassword,
  verifyEmail,
} from "@lib/redux/auth/operations";
import { IAuthResponse, IAuthState, IRegistrationResponse } from "../types";

const handlePending = (state: IAuthState) => {
  state.isLoading = true;
  state.error = null;
  // state.isResend = false;
  state.isAuthenticated = false;
};

const handleRejected = (state: IAuthState, action: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.isResend = false;
  state.isAuthenticated = false;
  state.error =
    typeof action.payload === "string" ? action.payload : "Unknown error";
};

const setAuthSuccess = (
  state: IAuthState,
  action: PayloadAction<IAuthResponse>,
) => {
  state.accessToken = action.payload.access_token;
  state.isLoading = false;
  state.error = null;
  state.isAuthenticated = true;
};

const initialState: IAuthState = {
  accessToken: "",
  pendingUserId: "",
  isLoading: false,
  error: null,
  isResend: false,
  isAuthenticated: false,
  isVerify: false,
  id: "",
  isPasswordChange: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetResendEmail: (state) => {
      state.id = "";
      // state.pendingUserId = "";
      // state.isLoading = false;
      // state.error = null;
    },

    resendEmail: (state) => {
      state.isResend = true;
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
        state.id = action.payload.id;
        // state.pendingUserId = action.payload.id;
      },
    );

    builder.addCase(logInUser.fulfilled, setAuthSuccess);

    builder.addCase(validateRegistrationEmail.fulfilled, setAuthSuccess);

    builder.addCase(resendValidationCode.fulfilled, (state: IAuthState) => {
      state.isLoading = false;
      state.error = null;
      state.isResend = false;
    });

    builder.addCase(refreshAccessToken.fulfilled, setAuthSuccess);

    builder.addCase(
      recoveryPassword.fulfilled,
      (state: IAuthState, action: PayloadAction<IRegistrationResponse>) => {
        state.isLoading = false;
        state.error = null;
        state.id = action.payload.id;
      },
    );

    builder.addCase(verifyEmail.fulfilled, (state: IAuthState) => {
      state.isLoading = false;
      state.error = null;
      state.isVerify = true;
    });

    builder.addCase(changePassword.fulfilled, (state: IAuthState) => {
      state.isLoading = false;
      state.error = null;
      state.isVerify = false;
      state.id = "";
      state.isPasswordChange = true;
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
          refreshAccessToken.pending,
          changePassword.pending,
          verifyEmail.pending,
          recoveryPassword.pending,
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
          refreshAccessToken.rejected,
          changePassword.rejected,
          verifyEmail.rejected,
          recoveryPassword.rejected,
        ),
        handleRejected,
      );
  },
});


export const { resetResendEmail, resendEmail, clearError } = authSlice.actions;

export default authSlice.reducer;
