"use client";

import { CheckIcon } from "lucide-react";
import { cn } from "@lib/utils";
import { ComponentPropsWithoutRef, forwardRef, useState } from "react";

type CheckboxProps = {
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
} & ComponentPropsWithoutRef<"button">;

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    { className, checked: controlledChecked, onCheckedChange, ...props },
    ref,
  ) => {
    const [unchecked, setUnchecked] = useState(!controlledChecked);

    const isChecked = controlledChecked ?? !unchecked;

    const toggleChecked = () => {
      const newChecked = !isChecked;
      setUnchecked(!newChecked);
      onCheckedChange?.(newChecked);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="checkbox"
        aria-checked={isChecked}
        onClick={toggleChecked}
        className={cn(
          "peer flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[4px] border border-[var(--stroke-normal)] outline-none",
          "focus-visible:ring-ring/50 hover:border-[var(--button-secondary-hover)] focus-visible:ring-[3px]",
          isChecked &&
            "border-none bg-[var(--button-tertiary-active)] text-[var(--text-white)]",
          className,
        )}
        {...props}
      >
        {isChecked && (
          <CheckIcon className="size-3.5 text-[var(--text-white)]" />
        )}
      </button>
    );
  },
);

Checkbox.displayName = "Checkbox22";

export { Checkbox };
