"use client";

import { Button } from "@components/ui";
import { FcGoogle } from "react-icons/fc";

import { useAppDispatch } from "@/lib/redux/hooks";
import { fetchGoogleAuth } from "@/lib/redux/auth/operations";

export default function FormFooter() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchGoogleAuth());
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <p className="body-text text-[16px] text-[var(--text-grey)]">Aбо</p>
        <Button
          variant="outline"
          className="w-full border-[var(--stroke-normal)]"
          onClick={handleClick}
        >
          <div className="flex w-full items-center justify-center gap-3">
            <FcGoogle size={18} />
            <p className="button-text font-semibold text-[var(--text-grey)]">
              Продовжити з Google
            </p>
          </div>
        </Button>
      </div>
    </>
  );
}
