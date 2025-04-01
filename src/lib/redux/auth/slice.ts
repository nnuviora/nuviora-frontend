import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  registerUser,
  validateRegistrationEmail,
} from "@lib/redux/auth/operations";

export interface IAuthState {
  isLoading: boolean;
  error: string | null;
  pendingUserId: string;
  user: object | null;
}

const handlePending = (state: IAuthState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: IAuthState, action: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.error =
    typeof action.payload === "string" ? action.payload : "Unknown error";
};

const initialState = {
  isLoading: false,
  error: null,
  pendingUserId: "",
  user: null,
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
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pendingUserId = action.payload.id;
    });

    builder
      .addCase(validateRegistrationEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })

      .addMatcher(
        isAnyOf(registerUser.pending, validateRegistrationEmail.pending),
        handlePending,
      )
      .addMatcher(
        isAnyOf(registerUser.rejected, validateRegistrationEmail.rejected),
        handleRejected,
      );
  },
});

export const { resetPendingUserId } = authSlice.actions;

export default authSlice.reducer;
