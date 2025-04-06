"use client";

import { ComponentType, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/lib/redux/auth/selectors";

export default function withAuth<T extends object>(
  Component: ComponentType<T>,
) {
  return function ProtectedComponent(props: T) {
    const router = useRouter();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) return null;

    return <Component {...props} />;
  };
}
