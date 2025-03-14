import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "@lib/utils/cn";


const buttonVariants = cva(
  "cursor-pointer rounded-lg border-none px-9.5 py-3.5 text-base font-semibold tracking-wide leading-[1.25] " +
    "transition-colors duration-[250ms] ease-in-out",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-red-500 hover:bg-[var(--secondary)] ",
        white: "bg-white  text-black hover:bg-gray-400 ",
        iconAndText:
          "px-1 py-3 flex items-center justify-center gap-2 bg-transparent group",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps): ReactElement {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
}
