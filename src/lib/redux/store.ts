"use client";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@lib/redux/toggleModal/slice";
import authReducer from "@lib/redux/auth/slice";
import userReducer from "@lib/redux/user/slice";
import { setupTokenInterceptor } from "@/api/axios/tokenInterceptor";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    user: userReducer,
  },
});
setupTokenInterceptor(store.getState);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
