"use client";

import { persistor, store } from "@/src/lib/redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ReactNode } from "react";

interface ReduxProviderProps {
  children: ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
