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
  fetchGoogleAuth,
  fetchGoogleCallback,
} from "@lib/redux/auth/operations";
import {
  IAuthResponse,
  IAuthState,
  IGoogleCallback,
  IGoogleResponse,
  IRegistrationResponse,
} from "../types";

const handlePending = (state: IAuthState) => {
  state.isLoading = true;
  state.error = null;
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
    clearId: (state) => {
      state.id = "";
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

    builder.addCase(
      fetchGoogleAuth.fulfilled,
      (state: IAuthState, action: PayloadAction<IGoogleResponse>) => {
        state.isLoading = false;
        state.error = null;
        state.url = action.payload.url;
      },
    );

    builder.addCase(
      fetchGoogleCallback.fulfilled,
      (state: IAuthState, action: PayloadAction<IGoogleCallback>) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = action.payload.access_token;
      },
    );

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
          fetchGoogleAuth.pending,
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
          fetchGoogleAuth.rejected,
        ),
        handleRejected,
      );
  },
});

export const { clearId, resendEmail, clearError } = authSlice.actions;

export default authSlice.reducer;
