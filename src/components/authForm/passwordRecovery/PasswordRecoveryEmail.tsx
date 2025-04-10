"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { PasswordRecoveryFormEmail } from "@components/authForm/passwordRecovery/PasswordRecoveryFormEmail";
import { selectIsPasswordRecoveryEmail } from "@lib/redux/toggleModal/selectors";
import { GoBack } from "@components/authForm/passwordRecovery/goBack";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useEffect } from "react";
import { selectAuthError, selectIdUser } from "@/lib/redux/auth/selectors";
import { notify } from "@/components/notifi/notifi";
import { clearError } from "@/lib/redux/auth/slice";

export const PasswordRecoveryEmail = () => {
  const isPasswordRecoveryEmail = useAppSelector(selectIsPasswordRecoveryEmail);
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectIdUser);
  const IsError = useAppSelector(selectAuthError);

  useEffect(() => {
    if (userId !== "") {
      notify({ message: "Email sent!", type: "success" });
      dispatch(closeModal("isPasswordRecoveryEmail"));
      dispatch(openModal("isVerifyOTP"));
    }
    if (IsError) {
      notify({ message: IsError, type: "error" });
      dispatch(clearError());
    }
  }, [IsError, userId, dispatch]);

  return (
    <Dialog
      open={isPasswordRecoveryEmail}
      onOpenChange={() => dispatch(closeModal("isPasswordRecoveryEmail"))}
    >
      <DialogContent
        className="xl2:py-32 xl2:px-38 xl2:w-[642px] flex h-full max-h-3/5 w-[335px] flex-col gap-5 overflow-y-auto px-4 pt-5 pb-15 md:w-[465px] md:px-16 md:py-20"
        aria-describedby={undefined}
      >
        <GoBack
          modal="isPasswordRecoveryEmail"
          className="xl2:top-8 xl2:left-8 absolute top-5 left-4 md:top-6 md:left-6"
        />
        <DialogHeader className="pt-20">
          <DialogTitle className="h3-text font-semibold text-[var(--text-black)]">
            Відновлення паролю
          </DialogTitle>
          <DialogDescription className="captions-text text-start text-[var(--text-black)]">
            Введіть Ваш E-mail, після чого ми відправимо на нього новий пароль
          </DialogDescription>
        </DialogHeader>
        <PasswordRecoveryFormEmail />
        <DialogFooter className="flex-1 items-center justify-end">
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
