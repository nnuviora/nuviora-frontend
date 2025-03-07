"use client";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  useState,
} from "react";
import { AiOutlineEyeInvisible, AiTwotoneEye } from "react-icons/ai";
import { cn } from "@/lib/utils/cn";

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
          "w-full rounded-lg border border-[var(--foreground)]/10 bg-transparent px-4.5 py-4 text-base outline-none",
          className,
        )}
        {...props}
        ref={ref}
      />
      {showToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-2 flex items-center"
        >
          {showPassword ? (
            <AiTwotoneEye size={20} />
          ) : (
            <AiOutlineEyeInvisible size={20} />
          )}
        </button>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
