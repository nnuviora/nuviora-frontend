import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../types";
import { fetchProfile } from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state: IUserState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: IUserState, action: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.error =
    typeof action.payload === "string" ? action.payload : "Unknown error";
};

const initialState: IUserState = {
  user: null,
  isEdit: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editProfile: (state) => {
      state.isEdit = true;
    },
    readProfile: (state) => {
      state.isEdit = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProfile.fulfilled,
      (state: IUserState, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      },
    );

    builder
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })

      .addMatcher(isAnyOf(fetchProfile.pending), handlePending)

      .addMatcher(isAnyOf(fetchProfile.rejected), handleRejected);
  },
});

export const { editProfile, readProfile } = userSlice.actions;

export default userSlice.reducer;
