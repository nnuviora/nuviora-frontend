"use client";

import { useAppDispatch } from "@/lib/redux/hooks";
import { closeModal } from "@/lib/redux/toggleModal/slice";
import { cn } from "@/lib/utils";
import { IModalState } from "@/types";
import { Button } from "@components/ui";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type GoBackProps = {
  modal: keyof IModalState;
  className?: string;
};

export function GoBack({ modal, className }: GoBackProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleBack = () => {
    dispatch(closeModal(modal));
    router.back();
  };
  return (
    <Button
      variant="link"
      className={cn("relative -top-3.5 -left-3.5", className)}
      onClick={handleBack}
    >
      <div className="flex items-center gap-2">
        <ArrowLeft size={24} className="stroke-[var(--text-black)]" />
        <p className="text-[16px] leading-[1.2] text-[var(--text-black)]">
          Повернутися до входу
        </p>
      </div>
    </Button>
  );
}
