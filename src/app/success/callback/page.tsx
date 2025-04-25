"use client";

import { fetchGoogleCallback } from "@/lib/redux/auth/operations";
import { selectIsAuthenticated } from "@/lib/redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code && !isAuthenticated) {
      dispatch(fetchGoogleCallback(code));
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) router.push("/");
  }, [router, isAuthenticated]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Вхід через Google...</p>
    </div>
  );
};

export default Page;
