// import * as React from "react";

// import { cn } from "@/lib/utils";

// function Input({ className, type, ...props }: React.ComponentProps<"input">) {
//   return (
//     <input
//       type={type}
//       data-slot="input"
//       className={cn(
//         "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
//         "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

// export { Input };

"use client";

import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  useState,
} from "react";

import { Eye, EyeOff } from "lucide-react";
import { cn } from "@lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder?: string;
  showToggle?: boolean;
  className?: string;
}

const Input = forwardRef(function Input(
  {
    type,
    name,
    placeholder,
    className,
    showToggle = false,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const [showPassword, setShowPassword] = useState<boolean>(!showToggle);

  return (
    <div className="relative w-full">
      <input
        type={showToggle ? (showPassword ? "text" : "password") : type}
        name={name}
        placeholder={placeholder}
        className={cn(
          "body-text w-full rounded-lg border border-[var(-text-grey)] bg-transparent px-4.5 py-4 outline-none",
          className,
        )}
        {...props}
        ref={ref}
      />
      {showToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-2 flex cursor-pointer items-center"
        >
          {showPassword ? (
            <Eye size={16} className="stroke-[var(--text-grey)]" />
          ) : (
            <EyeOff size={16} className="stroke-[var(--text-grey)]" />
          )}
        </button>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
