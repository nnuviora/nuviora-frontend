import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";
import { resendValidationCode } from "@lib/redux/auth/operations";
import {
  selectAuthError,
  selectIdUser,
  selectIsResend,
} from "@lib/redux/auth/selectors";
import { notify } from "@components/notifi/notifi";
import { clearError, resendEmail } from "@lib/redux/auth/slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

export default function ResendTimer(): JSX.Element {
  const userId = useAppSelector(selectIdUser);
  const IsError = useAppSelector(selectAuthError);
  const IsResend = useAppSelector(selectIsResend);

  const [timeLeft, setTimeLeft] = useState<number>(10);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer: NodeJS.Timeout = setTimeout(
        () => setTimeLeft((prev) => prev - 1),
        1000,
      );
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (IsError) {
      notify({ message: IsError, type: "error" });
      dispatch(clearError());
    }

    if (IsResend) {
      notify({ message: "Код повторно відправлений", type: "success" });
    }
  }, [IsError, IsResend]);

  const handleClick = () => {
    setTimeLeft(10);
    dispatch(resendEmail());
    dispatch(resendValidationCode(userId));
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
        >
          Натисніть для повторної відправки
        </Button>
      )}
    </div>
  );
}
