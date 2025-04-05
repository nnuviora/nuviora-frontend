"use client";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer, { IModalState } from "@lib/redux/toggleModal/slice";
import authReducer, { IAuthState } from "@lib/redux/auth/slice";
import loginSlice, { ILogInState } from "@lib/redux/logIn/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// export interface RootState {
//   modal: IModalState;
//   login: ILogInState;
//   auth: IAuthState;
// }

const persistedAuthReducer = persistReducer(
  {
    key: "auth",
    storage,
    whitelist: ["accessToken"],
  },
  authReducer,
);

const store = configureStore({
  reducer: {
    modal: modalReducer,
    login: loginSlice,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const persistor = persistStore(store);
