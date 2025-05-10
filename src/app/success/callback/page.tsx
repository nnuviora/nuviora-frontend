"use client";

import { selectIsAuthenticated } from "@/lib/redux/auth/selectors";
import { useAppSelector } from "@/lib/redux/hooks";
import { useAuth } from "@/api/tanstackReactQuery/auth/mutations";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { googleCallbackMutation } = useAuth();
  const router = useRouter();

  const code =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("code")
      : null;

  if (code && !isAuthenticated && googleCallbackMutation.status === "idle") {
    googleCallbackMutation.mutate(code);
  }

  useEffect(() => {
    if (googleCallbackMutation.isSuccess) {
      router.replace("/");
    }
  }, [googleCallbackMutation, router]);
  return (
    <div className="flex h-screen items-center justify-center">
      <p>Виконуємо вхід через Google...</p>
    </div>
  );
};

export default Page;
