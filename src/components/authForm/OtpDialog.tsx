"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import { Key } from "lucide-react";
import { useEffect } from "react";
import { notify } from "@components/notifi/notifi";
import ResendTimer from "@components/authForm/validateForm/timer";
import { useAppDispatch } from "@/lib/redux/hooks";
import { clearError } from "@/lib/redux/auth/slice";
import Link from "next/link";

interface OtpDialogProps {
  formComponent: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
  successMessage: string;
  onSuccess: () => void;
  error?: string | null;
  title?: string;
  description?: string;
}

export const OtpDialog = ({
  formComponent, // форма для відправки
  isOpen, // назва модального вікна для компонента
  onClose, // функція для закриття модального вікна
  isSuccess, // тригер для успішного запиту
  successMessage, // повідомлення нотіфікашка при успішному запиті
  onSuccess, // функції при успішному запиті
  error, // помилка при не успішному запиті
  title = "Верифікація акаунта",
  description = "Ми надіслали код на Ваш Email, перевірте папку Спам",
}: OtpDialogProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      notify({ message: successMessage, type: "success" });
      onSuccess();
    }
    if (error) {
      notify({ message: error, type: "error" });
      dispatch(clearError());
    }
  }, [successMessage, isSuccess, onSuccess, error, dispatch]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="xl2:py-32 xl2:px-38 xl2:w-[642px] flex h-full max-h-3/5 w-[335px] flex-col gap-5 overflow-y-auto px-4 pt-20 pb-12 md:w-[465px] md:px-16 md:py-20"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <Key size={56} />
          <DialogTitle className="h3-text font-semibold text-[var(--text-black)]">
            {title}
          </DialogTitle>
          <DialogDescription className="captions-text text-start text-[var(--text-black)]">
            {description}
          </DialogDescription>
        </DialogHeader>

        {formComponent}

        <DialogFooter className="flex flex-1 flex-col justify-between">
          <ResendTimer />
          <Link
            className="font-[family-name:var(--font-roboto)] text-[20px] font-semibold text-[var(--text-black)]"
            href="/"
          >
            Служба підтримки
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
