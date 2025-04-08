"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import { useDispatch, useSelector } from "react-redux";
import { selectIsPasswordRecoveryPassword } from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { closeModal } from "@lib/redux/toggleModal/slice";
import { DialogDescription } from "@radix-ui/react-dialog";
import { PasswordRecoveryFormPassword } from "@components/authForm/passwordRecovery/PasswordRecoveryFormPassword";
import { GoBack } from "@components/authForm/passwordRecovery/goBack";
import Link from "next/link";

const useAppDispatch: () => AppDispatch = useDispatch;

export const PasswordRecoveryPassword = () => {
  const isPasswordRecoveryPassword = useSelector(
    selectIsPasswordRecoveryPassword,
  );
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isPasswordRecoveryPassword}
      onOpenChange={() => dispatch(closeModal("isPasswordRecoveryPassword"))}
    >
      <DialogContent className="gap-4 px-8 py-8" aria-describedby={undefined}>
        <GoBack />
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
