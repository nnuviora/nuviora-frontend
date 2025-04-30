"use client";

import { useMutation } from "@tanstack/react-query";
import { fetchGoogleCallbackApi } from "@/api/tanstackReactQuery/auth/requests";
import { selectIsAuthenticated } from "@/lib/redux/auth/selectors";
import { useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const code =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("code")
      : null;

  const mutation = useMutation({
    mutationFn: async (code: string) => {
      await fetchGoogleCallbackApi(code);
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  if (code && !isAuthenticated && mutation.status === "idle") {
    console.log("mutation :>> ");
    mutation.mutate(code);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Виконуємо вхід через Google...</p>
    </div>
  );
};

export default Page;
