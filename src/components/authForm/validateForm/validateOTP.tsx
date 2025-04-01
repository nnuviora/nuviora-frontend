"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@lib/redux/store";
import { closeModal } from "@lib/redux/toggleModal/slice";
import { EmailOTPForm } from "@components/authForm/validateForm/emailOtpForm";
import { selectIsValidateOTP } from "@lib/redux/toggleModal/selectors";

import { Key } from "lucide-react";
import ResendTimer from "@components/authForm/validateForm/timer";
import { resetPendingUserId } from "@lib/redux/auth/slice";

const useAppDispatch: () => AppDispatch = useDispatch;

export const ValidateOTP = () => {
  const isValidateOTP = useSelector(selectIsValidateOTP);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isValidateOTP}
      onOpenChange={() => {
        dispatch(resetPendingUserId());
        dispatch(closeModal("isValidateOTP"));
      }}
    >
      <DialogContent
        className="xl2:max-w-142 xl2:px-15 xl2:py-30 flex w-full max-w-74 flex-col gap-4 px-5 py-20 md:max-w-4/5 md:px-30 md:py-30"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <Key size={56} />
          <DialogTitle className="h2-text font-semibold text-[var(--text-black)]">
            Верифікація акаунта
          </DialogTitle>
          <DialogDescription className="body-text">
            Ми надіслали код на Ваш Email, перевірте папку Спам
          </DialogDescription>
        </DialogHeader>
        <EmailOTPForm />
        <DialogFooter className="items-center">
          <ResendTimer />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
