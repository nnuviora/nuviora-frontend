"use client";

import { ReactNode } from "react";
import ReduxProvider from "@/lib/providers/ReduxProvider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
