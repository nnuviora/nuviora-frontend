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
import { useEffect, useCallback } from "react";
import { notify } from "@components/notifi/notifi";
import ResendTimer from "@components/authForm/validateForm/timer";
import { GoBack } from "./passwordRecovery/goBack";
import { IModalState } from "@/types";

interface OtpDialogProps {
  formComponent: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
  successMessage: string;
  onSuccess: () => void;
  error?: string | null;
  onError?: (error: string) => void;
  modal: keyof IModalState;
  title?: string;
  description?: string;
}

export const OtpDialog = ({
  formComponent,
  isOpen,
  onClose,
  isSuccess,
  successMessage,
  onSuccess,
  error,
  onError,
  modal,
  title = "Верифікація акаунта",
  description = "Ми надіслали код на Ваш Email, перевірте папку Спам",
}: OtpDialogProps) => {
  const handleSuccess = useCallback(() => {
    notify({ message: successMessage, type: "success" });
    onSuccess();
  }, [successMessage, onSuccess]);

  const handleError = useCallback(() => {
    if (error) {
      notify({ message: error, type: "error" });
      onError?.(error);
    }
  }, [error, onError]);

  useEffect(() => {
    if (isSuccess) {
      handleSuccess();
    }
    if (error) {
      handleError();
    }
  }, [isSuccess, error, handleSuccess, handleError]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="xl2:max-w-142 xl2:px-15 xl2:py-30 flex w-full max-w-74 flex-col gap-4 px-5 py-20 md:max-w-4/5 md:px-30 md:py-30"
        aria-describedby={undefined}
      >
        <GoBack modal={modal} />
        <DialogHeader>
          <Key size={56} />
          <DialogTitle className="h2-text font-semibold text-[var(--text-black)]">
            {title}
          </DialogTitle>
          <DialogDescription className="body-text">
            {description}
          </DialogDescription>
        </DialogHeader>

        {formComponent}

        <DialogFooter className="items-center">
          <ResendTimer />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
