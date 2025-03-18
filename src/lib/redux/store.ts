import { configureStore } from "@reduxjs/toolkit";
import modalReducer, { IModalState } from "@lib/redux/toggleModal/slice";

export interface RootState {
  modal: IModalState;
}

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
