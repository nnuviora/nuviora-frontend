"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import { selectIsPasswordRecoveryPassword } from "@lib/redux/toggleModal/selectors";
import { closeModal } from "@lib/redux/toggleModal/slice";
import { DialogDescription } from "@radix-ui/react-dialog";
import { PasswordRecoveryFormPassword } from "@components/authForm/passwordRecovery/PasswordRecoveryFormPassword";
import { GoBack } from "@components/authForm/passwordRecovery/goBack";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectAuthError, selectToken } from "@/lib/redux/auth/selectors";
import { notify } from "@/components/notifi/notifi";
import { clearError } from "@/lib/redux/auth/slice";
import { useEffect } from "react";

export const PasswordRecoveryPassword = () => {
  const isPasswordRecoveryPassword = useAppSelector(
    selectIsPasswordRecoveryPassword,
  );
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const IsError = useAppSelector(selectAuthError);

  useEffect(() => {
    if (token) {
      notify({ message: "Пароль успішно оновлено!", type: "success" });
      dispatch(closeModal("isPasswordRecoveryPassword"));
    }
    if (IsError) {
      notify({ message: IsError, type: "error" });
      dispatch(clearError());
    }
  }, [IsError, token, dispatch]);

  return (
    <Dialog
      open={isPasswordRecoveryPassword}
      onOpenChange={() => dispatch(closeModal("isPasswordRecoveryPassword"))}
    >
      <DialogContent className="gap-4 px-8 py-8" aria-describedby={undefined}>
        <GoBack modal="isPasswordRecoveryPassword" />
        <DialogHeader>
          <DialogTitle className="mb-2 text-[24px] font-semibold text-[var(--text-black)]">
            Відновлення паролю
          </DialogTitle>
          <DialogDescription>Введіть новий пароль</DialogDescription>
        </DialogHeader>
        <PasswordRecoveryFormPassword />
        <DialogFooter className="items-center">
          <Link
            className="font-[family-name:var(--font-roboto)] text-[20px] font-semibold text-[var(--text-black)]"
            href="#"
          >
            Служба підтримки
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
