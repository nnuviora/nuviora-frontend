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
          "border-none  bg-[var(--button-primary-default)] text-[var(--white)] hover:bg-[var(--button-secondary-hover)] ",
        secondary:
          "bg-transparent text-[var(--button-primary-default)] border border-[var(--button-primary-default)] " +
          "hover:bg-[var(--bg-hover-active)] hover:border-[var(--button-secondary-hover)] hover:text-[var(--button-secondary-hover)] " +
          "active:bg-[var(--bg-hover-active)] active:border-[var(--button-tertiary-active)] active:text-[var(--button-tertiary-active)]",
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
