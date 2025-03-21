"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@lib/utils";
import { ComponentProps, forwardRef } from "react";

const Checkbox = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof CheckboxPrimitive.Root>
>(function Checkbox({ className, ...props }, ref) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      className={cn(
        "peer cursor-pointer border-[var(--stroke-normal)] data-[state=checked]:bg-[var(--button-tertiary-active)] " +
          "data-[state=checked]:border-none data-[state=checked]:text-[var(--text-white)]" +
          "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20" +
          "aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border outline-none" +
          "hover:border-[var(--button-secondary-hover)] focus-visible:ring-[3px]",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-[var(--text-white)] transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
