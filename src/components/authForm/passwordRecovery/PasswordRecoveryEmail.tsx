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
import { PasswordRecoveryFormEmail } from "@components/authForm/passwordRecovery/PasswordRecoveryFormEmail";
import { selectIsPasswordRecoveryEmail } from "@lib/redux/toggleModal/selectors";
import { GoBack } from "@components/authForm/passwordRecovery/goBack";
import Link from "next/link";

const useAppDispatch: () => AppDispatch = useDispatch;

export const PasswordRecoveryEmail = () => {
  const isPasswordRecoveryEmail = useSelector(selectIsPasswordRecoveryEmail);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isPasswordRecoveryEmail}
      onOpenChange={() => dispatch(closeModal("isPasswordRecoveryEmail"))}
    >
      <DialogContent className="gap-4 px-8 py-8" aria-describedby={undefined}>
        <GoBack />
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
