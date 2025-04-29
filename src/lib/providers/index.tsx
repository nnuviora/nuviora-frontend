"use client";

import { ReactNode } from "react";
import ReduxProvider from "@/lib/providers/ReduxProvider";
import ReactQueryProvider from "@lib/providers/ReactQueryProvider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ReduxProvider>
  );
}
