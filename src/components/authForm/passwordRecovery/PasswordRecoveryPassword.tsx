"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import { selectIsPasswordRecoveryPassword } from "@lib/redux/toggleModal/selectors";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { DialogDescription } from "@radix-ui/react-dialog";
import { PasswordRecoveryFormPassword } from "@components/authForm/passwordRecovery/PasswordRecoveryFormPassword";
import { GoBack } from "@components/authForm/passwordRecovery/goBack";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  selectAuthError,
  selectIsPasswordChange,
} from "@/lib/redux/auth/selectors";
import { notify } from "@/components/notifi/notifi";
import { clearError } from "@/lib/redux/auth/slice";
import { useEffect } from "react";

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
      onOpenChange={() => dispatch(closeModal("isPasswordRecoveryPassword"))}
    >
      <DialogContent
        className="xl2:py-32 xl2:px-38 xl2:w-[642px] flex h-full max-h-3/5 w-[335px] flex-col gap-5 overflow-y-auto px-4 py-15 md:w-[465px] md:px-16 md:py-20"
        aria-describedby={undefined}
      >
        <GoBack
          modal="isPasswordRecoveryPassword"
          className="xl2:top-8 xl2:left-8 absolute top-5 left-4 md:top-6 md:left-6"
        />
        <DialogHeader>
          <DialogTitle className="h3-text font-semibold text-[var(--text-black)]">
            Відновлення паролю
          </DialogTitle>
          <DialogDescription className="captions-text text-start text-[var(--text-black)]">
            Введіть Ваш email, після чого ми відправимо на нього новий пароль
          </DialogDescription>
        </DialogHeader>
        <PasswordRecoveryFormPassword />
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
