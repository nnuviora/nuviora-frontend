import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  registerUser,
  resendValidationCode,
  validateRegistrationEmail,
} from "@lib/redux/auth/operations";

export interface IAuthState {
  isLoading: boolean;
  error: string | null;
  pendingUserId: string;
  accessToken: string;
  user: object | null;
  isResend: boolean;
}

const handlePending = (state: IAuthState) => {
  state.isLoading = true;
  state.error = null;
  state.isResend = false;
};

const handleRejected = (state: IAuthState, action: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.isResend = false;
  state.error =
    typeof action.payload === "string" ? action.payload : "Unknown error";
};

const initialState = {
  isLoading: false,
  error: null,
  pendingUserId: "",
  user: null,
  accessToken: "",
  isResend: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetPendingUserId: (state) => {
      state.pendingUserId = "";
      state.isLoading = false;
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pendingUserId = action.payload.id;
    });

    builder.addCase(validateRegistrationEmail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.access_token;
      state.user = action.payload.user;
    });

    builder
      .addCase(resendValidationCode.fulfilled, (state) => {
        state.isLoading = false;
        state.isResend = true;
      })

      .addMatcher(
        isAnyOf(
          registerUser.pending,
          validateRegistrationEmail.pending,
          resendValidationCode.pending,
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          validateRegistrationEmail.rejected,
          resendValidationCode.rejected,
        ),
        handleRejected,
      );
  },
});

export const { resetPendingUserId, clearError } = authSlice.actions;

export default authSlice.reducer;
