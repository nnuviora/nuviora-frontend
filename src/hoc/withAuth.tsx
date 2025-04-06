"use client";

import { ComponentType, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/lib/redux/auth/selectors";

export default function withAuth<T extends object>(
  Component: ComponentType<T>,
) {
  return function ProtectedComponent(props: T) {
    const router = useRouter();
    const IsLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
      if (!IsLoggedIn) {
        router.replace("/");
      }
    }, [IsLoggedIn, router]);

    if (!IsLoggedIn) return null;

    return <Component {...props} />;
  };
}
