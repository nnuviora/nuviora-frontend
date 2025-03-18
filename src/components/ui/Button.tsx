import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "@lib/utils/cn";

const buttonVariants = cva(
  "cursor-pointer rounded-lg px-6 py-3 text-base font-semibold tracking-wide leading-[1.25] " +
    "transition-colors duration-[250ms] ease-in-out",

  {
    variants: {
      variant: {
        primary:
          "border-none  bg-[var(--button-default)] text-[var(--white)] hover:bg-[var(--button-hover)] ",
        secondary:
          "bg-transparent text-[var(--button-default)] border border-[var(--button-default)] " +
          "hover:bg-[var(--bg-hover-active)] hover:border-[var(--button-hover)] hover:text-[var(--button-hover)] " +
          "active:bg-[var(--bg-hover-active)] active:border-[var(--button-activ)] active:text-[var(--button-activ)]",
        iconAndText:
          "px-1 py-3 flex items-center justify-center gap-2 bg-transparent group",
      },
      disabled: {
        true: "border-none bg-[var(--bg-disabled)] text-[var(--text-disabled)] cursor-not-allowed pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  className,
  variant,
  disabled,
  ...props
}: ButtonProps): ReactElement {
  return (
    <button
      className={cn(buttonVariants({ variant, disabled, className }))}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
