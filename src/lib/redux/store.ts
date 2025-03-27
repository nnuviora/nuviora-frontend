import { configureStore } from "@reduxjs/toolkit";
import modalReducer, { IModalState } from "@lib/redux/toggleModal/slice";
import loginSlice, { ILogInState } from "@lib/redux/logIn/slice";

export interface RootState {
  modal: IModalState;
  login: ILogInState;
}

const store = configureStore({
  reducer: {
    modal: modalReducer,
    login: loginSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
