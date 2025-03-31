import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "@lib/redux/auth/operations";

interface AuthState {
  isLoading: boolean;
  error: string | null;
}

const handlePending = (state: AuthState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: AuthState, action: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.error =
    typeof action.payload === "string" ? action.payload : "Unknown error";
};

const initialState = {
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(registerUser.pending), handlePending)
      .addMatcher(isAnyOf(registerUser.rejected), handleRejected);
  },
});

export default authSlice.reducer;
