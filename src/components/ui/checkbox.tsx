"use client";

import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  useState,
  ReactNode,
  ChangeEvent,
} from "react";
import { cn } from "@/lib/utils/cn";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

export const Checkbox = forwardRef(function Checkbox(
  {
    name,
    onChange,
    className,
    disabled = false,
    children,
    ...props
  }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const isChecked = e.target.checked;
    setChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <label
      className={cn(
        "group flex items-center gap-2 text-base leading-tight transition-all duration-300",
        checked
          ? "text-[var(--button-tertiary-active)]"
          : "text-[var(--text-black)]",
        disabled
          ? "cursor-not-allowed text-[var(--text-disabled)]"
          : "cursor-pointer hover:text-[var(--button-secondary-hover)] focus:text-[var(--button-secondary-hover)]",
        className,
      )}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="sr-only"
        ref={ref}
      />
      <span
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-sm border-2 fill-[var(--white)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-all duration-300",
          disabled
            ? "cursor-not-allowed"
            : "cursor-pointer group-hover:border-[var(--button-secondary-hover)] group-focus:border-[var(--button-secondary-hover)]",
          checked
            ? "border-none bg-[var(--button-tertiary-active)]"
            : "border-[var(--stroke-default)] bg-[var(--white)]",
        )}
        {...props}
        aria-hidden="true"
      >
        <svg width="16" height="16">
          <use href="sprite.svg#iconCheck"></use>
        </svg>
      </span>
      {children}
    </label>
  );
});

Checkbox.displayName = "Checkbox";
