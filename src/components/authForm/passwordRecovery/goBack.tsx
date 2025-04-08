import { Button } from "@components/ui";
import { ArrowLeft } from "lucide-react";

export function GoBack() {
  return (
    <Button variant="link" className="relative -top-3.5 -left-3.5">
      <div className="flex items-center gap-2">
        <ArrowLeft size={20} className="stroke-[var(--text-black)]" />
        <p className="text-[16px] leading-[1.2] text-[var(--text-black)]">
          Повернутися до входу
        </p>
      </div>
    </Button>
  );
}
