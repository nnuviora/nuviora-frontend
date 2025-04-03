import { Button } from "@components/ui";
import { FcGoogle } from "react-icons/fc";
import { Heart } from "lucide-react";

export default function FormFooter() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <p className="body-text text-[16px] text-[var(--text-grey)]">Aбо</p>
        <Button
          variant="outline"
          className="w-full border-[var(--stroke-normal)]"
        >
          <div className="flex w-full items-center justify-center gap-3">
            <FcGoogle size={18} />
            <p className="button-text font-semibold text-[var(--text-grey)]">
              Продовжити з Google
            </p>
          </div>
        </Button>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <p className="body-text text-[16px] text-[var(--text-grey)]">
          Подобається наш проєкт?
        </p>
        <Button
          variant="outline"
          className="w-full border-[var(--stroke-normal)]"
        >
          <div className="flex w-full items-center justify-center gap-3">
            <Heart size={18} className="stroke-[var(--text-grey)]" />
            <p className="button-text font-semibold text-[var(--text-grey)]">
              Підтримати нас
            </p>
          </div>
        </Button>
      </div>
    </>
  );
}
