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
      <DialogContent className="gap-4 px-8 py-8" aria-describedby={undefined}>
        <GoBack modal="isPasswordRecoveryEmail" />
        <DialogHeader>
          <DialogTitle className="mb-2 text-[24px] font-semibold text-[var(--text-black)]">
            Відновлення паролю
          </DialogTitle>
          <DialogDescription>
            Введіть Ваш E-mail, після чого ми відправимо на нього новий пароль
          </DialogDescription>
        </DialogHeader>
        <PasswordRecoveryFormEmail />
        <DialogFooter className="items-center">
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
