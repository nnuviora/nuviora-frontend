"use client";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  useState,
} from "react";
import { cn } from "@/lib/utils/cn";
import { Eye, EyeOff } from "lucide-react";

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
          "w-full rounded-lg border border-[var(-text-grey)] bg-transparent px-4.5 py-4 body-text outline-none ",
          className,
        )}
        {...props}
        ref={ref}
      />
      {showToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer absolute inset-y-0 right-2 flex items-center"
        >
          {showPassword ? (
            <Eye size={16} className="stroke-[var(--text-grey)]"/>
          ) : (
            <EyeOff size={16} className="stroke-[var(--text-grey)]"/>
          )}
        </button>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
