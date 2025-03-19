"use client";

import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  ChangeEvent,
} from "react";
import { cn } from "@/lib/utils/cn";

interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
  children: ReactNode;
}

export const RadioButton = forwardRef(function RadioButton(
  {
    name,
    value,
    checked,
    onChange,
    className,
    children,
    ...props
  }: RadioButtonProps,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label
      className={cn(
        "group inline-flex cursor-pointer items-center gap-2 text-base leading-tight transition-all duration-300 hover:text-[var(--button-secondary-hover)] focus:text-[var(--button-secondary-hover)]",
        checked
          ? "text-[var(--button-tertiary-active)]"
          : "text-[var(--text-black)]",
        className,
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        ref={ref}
        className="sr-only"
      />
      <span
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-[var(--button-secondary-hover)] group-focus:border-[var(--button-secondary-hover)]",
          checked
            ? "border-[var(--button-tertiary-active)]"
            : "border-[var(--stroke-default)]",
        )}
        {...props}
        aria-hidden="true"
      >
        {checked ? (
          <span className="h-3 w-3 rounded-full bg-[var(--button-tertiary-active)] transition-all duration-300"></span>
        ) : (
          <span className="bg-[var(--white)]"></span>
        )}
      </span>
      <span>{children}</span>
    </label>
  );
});

RadioButton.displayName = "RadioButton";
