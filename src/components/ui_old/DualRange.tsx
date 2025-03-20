"use client";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@lib/utils/cn";
import {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  Fragment,
  ReactNode,
} from "react";

interface DualRangeSliderProps
  extends ComponentProps<typeof SliderPrimitive.Root> {
  labelPosition?: "top" | "bottom";
  label?: (value: number | undefined) => ReactNode;
}

const DualRangeSlider = forwardRef(function DualRangeSlider(
  { className, label, labelPosition = "top", ...props }: DualRangeSliderProps,
  ref: ForwardedRef<HTMLSpanElement>,
) {
  const initialValue = Array.isArray(props.value)
    ? props.value
    : [props.min, props.max];

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none items-center select-none",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="bg-[var(--bg-success)] relative h-2 w-full grow overflow-hidden rounded-full">
        <SliderPrimitive.Range className="bg-[var(--button-primary-default)] absolute h-full" />
      </SliderPrimitive.Track>
      {initialValue.map((value, index) => (
        <Fragment key={index}>
          <SliderPrimitive.Thumb className="border-[var(--stroke-normal)] bg-[var(--bg-white)] ring-offset-background focus-visible:ring-ring relative block h-6 w-6 rounded-full border-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
            {label && (
              <span
                className={cn(
                  "absolute flex w-full justify-center",
                  labelPosition === "top" && "-top-7",
                  labelPosition === "bottom" && "top-4",
                )}
              >
                {label(value)}
              </span>
            )}
          </SliderPrimitive.Thumb>
        </Fragment>
      ))}
    </SliderPrimitive.Root>
  );
});
DualRangeSlider.displayName = "DualRangeSlider";

export { DualRangeSlider };
