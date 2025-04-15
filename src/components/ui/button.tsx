import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";
import { ComponentProps } from "react";

const buttonVariants = cva(
  "cursor-pointer rounded-lg button-text " +
    "transition-colors duration-[250ms] ease-in-out",

  {
    variants: {
      variant: {
        default:
          "px-6 py-3 bg-[var(--button-primary-default)] text-[var(--white)] shadow-xs " +
          "hover:bg-[var(--button-secondary-hover)]",
        outline:
          "px-6 py-3 border bg-transparent text-[var(--button-primary-default)] border-[var(--button-primary-default)] shadow-xs " +
          "hover:bg-[var(--bg-hover-active)] hover:border-[var(--button-secondary-hover)] hover:text-[var(--button-secondary-hover)] " +
          "active:bg-[var(--bg-hover-active)] active:border-[var(--button-tertiary-active)] active:text-[var(--button-tertiary-active)]",

        link: "text-[var(--button-primary-default)] underline-offset-4 hover:underline",

        icon: "border-none bg-transparent text-[var(--white)] hover:text-[var(--text-error)]",

        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 " +
          "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 " +
          "dark:bg-destructive/60",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 ",
      },
      disabled: {
        true: "border-none bg-[var(--bg-disabled)] text-[var(--text-disabled)] cursor-not-allowed pointer-events-none",
      },

      size: {
        default: "h-12 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  disabled,
  asChild = false,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, disabled, className }))}
      disabled={disabled}
      {...props}
    />
  );
}

export { Button, buttonVariants };
