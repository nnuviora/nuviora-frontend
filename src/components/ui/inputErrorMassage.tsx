import { InputHTMLAttributes, JSX } from "react";
import { cn } from "@lib/utils";

interface InputErrorMassageProps extends InputHTMLAttributes<HTMLInputElement> {
  message: string;
  className?: string;
}
export function InputErrorMassage({
  message = "",
  className,
}: InputErrorMassageProps): JSX.Element {
  return (
    <p
      className={cn(
        "py-0.2 captions-text xl2:bottom-[-22px] absolute bottom-[-18px] left-0 rounded border-none text-[var(--text-error)] md:bottom-[-20px] " +
          className,
      )}
    >
      {message}
    </p>
  );
}
