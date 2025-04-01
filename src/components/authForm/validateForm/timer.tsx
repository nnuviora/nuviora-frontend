import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";

export default function ResendTimer(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState<number>(5);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer: NodeJS.Timeout = setTimeout(
        () => setTimeLeft((prev) => prev - 1),
        1000,
      );
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

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
          onClick={() => setTimeLeft(5)}
          className="captions-text text-[var(--text-link)]"
        >
          Натисніть для повторної відправки
        </Button>
      )}
    </div>
  );
}
