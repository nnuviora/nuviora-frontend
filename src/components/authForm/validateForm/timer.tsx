import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";
import { AppDispatch } from "@lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { resendValidationCode } from "@lib/redux/auth/operations";
import {
  selectAuthError,
  selectIsResend,
  selectPendingUserId,
} from "@lib/redux/auth/selectors";
import { notify } from "@components/notifi/notifi";
import { clearError } from "@lib/redux/auth/slice";
const useAppDispatch: () => AppDispatch = useDispatch;
export default function ResendTimer(): JSX.Element {
  const pendingUserId = useSelector(selectPendingUserId);
  const IsError = useSelector(selectAuthError);
  const IsResend = useSelector(selectIsResend);

  const [timeLeft, setTimeLeft] = useState<number>(100);
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
    setTimeLeft(100);
    dispatch(resendValidationCode(pendingUserId));
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
