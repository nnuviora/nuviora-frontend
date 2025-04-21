"use client";

import { fetchGoogleCallback } from "@/lib/redux/auth/operations";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      dispatch(fetchGoogleCallback(code));
      router.push("/");
    }
  }, [dispatch, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Завершаем вход через Google...</p>
    </div>
  );
};

export default Page;
