import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "body-text min-h-30 w-full resize-none rounded-[8px] border border-[var(--stroke-field)] bg-[var(--white)] px-2 py-2 placeholder-[var(--text-grey)] transition outline-none focus-within:ring-2 focus-within:ring-[var(--button-primary-default)] hover:border-[var(--button-secondary-hover)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
