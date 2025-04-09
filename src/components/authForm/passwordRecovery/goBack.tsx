"use client";

import { useAppDispatch } from "@/lib/redux/hooks";
import { closeModal } from "@/lib/redux/toggleModal/slice";
import { IModalState } from "@/types";
import { Button } from "@components/ui";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type GoBackProps = {
  modal: keyof IModalState;
};

export function GoBack({ modal }: GoBackProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleBack = () => {
    dispatch(closeModal(modal));
    router.back();
  };
  return (
    <Button
      variant="link"
      className="relative -top-3.5 -left-3.5"
      onClick={handleBack}
    >
      <div className="flex items-center gap-2">
        <ArrowLeft size={20} className="stroke-[var(--text-black)]" />
        <p className="text-[16px] leading-[1.2] text-[var(--text-black)]">
          Повернутися назад
        </p>
      </div>
    </Button>
  );
}
