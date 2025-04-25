import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../types";

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
});

export const { editProfile, readProfile } = userSlice.actions;

export default userSlice.reducer;
