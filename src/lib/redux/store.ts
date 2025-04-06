"use client";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@lib/redux/toggleModal/slice";
import authReducer from "@lib/redux/auth/slice";
import userReducer from "@lib/redux/user/slice";
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
    auth: persistedAuthReducer,
    user: userReducer,
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
