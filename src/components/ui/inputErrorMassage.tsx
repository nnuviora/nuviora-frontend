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
        "py-0.2 label-text absolute bottom-[-9px] left-2 rounded border text-[var(--text-error)] " +
          "border-[var(--text-error)] bg-[var(--bg-white)] px-2 " +
          "shadow-lg",
        className,
      )}
    >
      {message}
    </p>
  );
}
