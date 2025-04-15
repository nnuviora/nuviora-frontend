"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@components/ui";
import { selectIsPasswordRecoveryPassword } from "@lib/redux/toggleModal/selectors";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { PasswordRecoveryFormPassword } from "@components/authForm/passwordRecovery/PasswordRecoveryFormPassword";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  selectAuthError,
  selectIsPasswordChange,
} from "@/lib/redux/auth/selectors";
import { notify } from "@/components/notifi/notifi";
import { clearError } from "@/lib/redux/auth/slice";
import { useEffect } from "react";
import { logOut } from "@/lib/redux/auth/operations";

export const PasswordRecoveryPassword = () => {
  const isPasswordRecoveryPassword = useAppSelector(
    selectIsPasswordRecoveryPassword,
  );
  const dispatch = useAppDispatch();
  const isPasswordChange = useAppSelector(selectIsPasswordChange);
  const IsError = useAppSelector(selectAuthError);

  useEffect(() => {
    if (isPasswordChange) {
      notify({ message: "Пароль успішно змінено", type: "success" });
      dispatch(closeModal("isPasswordRecoveryPassword"));
      dispatch(openModal("isSignIn"));
    }
    if (IsError) {
      notify({ message: IsError, type: "error" });
      dispatch(clearError());
    }
  }, [IsError, isPasswordChange, dispatch]);

  return (
    <Dialog
      open={isPasswordRecoveryPassword}
      onOpenChange={() => {
        dispatch(closeModal("isPasswordRecoveryPassword"));
        dispatch(logOut());
      }}
    >
      <DialogContent
        className="xl2:py-32 xl2:px-38 xl2:w-[636px] flex h-full max-h-3/5 w-[335px] flex-col items-center justify-center gap-5 overflow-y-auto px-4 py-15 md:w-[465px] md:overflow-hidden md:px-16 md:py-20"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle className="h3-text font-semibold text-[var(--text-black)]">
            Відновлення паролю
          </DialogTitle>
          <DialogDescription className="captions-text text-start text-[var(--text-black)]">
            Введіть Ваш email, після чого ми відправимо на нього новий пароль
          </DialogDescription>
        </DialogHeader>
        <PasswordRecoveryFormPassword />
      </DialogContent>
    </Dialog>
  );
};
