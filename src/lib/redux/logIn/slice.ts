import { createSlice } from "@reduxjs/toolkit";

export interface ILogInState {
  isLogIn: boolean;
}

const initialState: ILogInState = {
  isLogIn: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogIn = true;
    },
    logOut: (state) => {
      state.isLogIn = false;
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
