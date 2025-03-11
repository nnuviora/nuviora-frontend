import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["dummy"],
};

const ignoredActions = [
  "persist/PERSIST",
  "persist/REHYDRATE",
  "persist/REGISTER",
  "persist/FLUSH",
  "persist/PAUSE",
  "persist/PURGE",
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export interface RootState {
  persisted: ReturnType<typeof persistedReducer>;
}

const store = configureStore({
  reducer: {
    persisted: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions },
    }),
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
