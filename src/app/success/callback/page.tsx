// "use client";

// import { fetchGoogleCallback } from "@/lib/redux/auth/operations";
// import { selectIsAuthenticated } from "@/lib/redux/auth/selectors";
// import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";

// const Page = () => {
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const isAuthenticated = useAppSelector(selectIsAuthenticated);

//   useEffect(() => {
//     const code = new URLSearchParams(window.location.search).get("code");

//     if (code && !isAuthenticated) {
//       dispatch(fetchGoogleCallback(code));
//     }
//   }, [dispatch, isAuthenticated]);

//   useEffect(() => {
//     if (isAuthenticated) router.push("/");
//   }, [router, isAuthenticated]);

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <p>Вхід через Google...</p>
//     </div>
//   );
// };

// export default Page;

"use client";

import { useMutation } from "@tanstack/react-query";
import { fetchGoogleCallback } from "@/lib/redux/auth/operations";
import { selectIsAuthenticated } from "@/lib/redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const code =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("code")
      : null;

  const mutation = useMutation({
    mutationFn: async (code: string) => {
      await dispatch(fetchGoogleCallback(code));
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  if (code && !isAuthenticated && mutation.status === "idle") {
    mutation.mutate(code);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Виконуємо вхід через Google...</p>
    </div>
  );
};

export default Page;
