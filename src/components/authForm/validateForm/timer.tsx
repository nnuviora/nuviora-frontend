"use client";

import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";
import { selectIdUser } from "@lib/redux/auth/selectors";
import { useAppSelector } from "@/lib/redux/hooks";
import { useAuth } from "@/api/tanstackReactQuery/auth/mutations";

export default function ResendTimer(): JSX.Element {
  const userId = useAppSelector(selectIdUser);
  const [timeLeft, setTimeLeft] = useState<number>(150);
  const { resendValidationCode } = useAuth();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer: NodeJS.Timeout = setTimeout(
        () => setTimeLeft((prev) => prev - 1),
        1000,
      );
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleClick = () => {
    setTimeLeft(150);
    resendValidationCode.mutate(userId);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="captions-text text-[var(--text-black)]">Не отримали код?</p>
      {timeLeft > 0 ? (
        <span className="captions-text text-[var(--text-black)]">
          Повторна відправка через {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </span>
      ) : (
        <Button
          variant="link"
          onClick={handleClick}
          className="captions-text text-[var(--text-link)]"
          disabled={!userId}
        >
          Натисніть для повторної відправки
        </Button>
      )}
    </div>
  );
}
