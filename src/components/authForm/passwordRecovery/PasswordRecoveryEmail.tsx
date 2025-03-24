"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "@lib/redux/store";
import { closeModal } from "@lib/redux/toggleModal/slice";
import { DialogDescription } from "@radix-ui/react-dialog";
import { PasswordRecoveryFormEmail } from "@components/authForm/passwordRecovery/PasswordRecoveryFormEmail";
import { ArrowLeft } from "lucide-react";
import { selectIsPasswordRecoveryEmail } from "@lib/redux/toggleModal/selectors";

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
        <Button variant="link" className="text-[var(--text-black)]">
          <div className="flex items-center gap-4">
            <ArrowLeft size={16} />
            <p>Повернутися до входу</p>
          </div>
        </Button>
        <DialogHeader>
          <DialogTitle className="h2-text text-[var(--text-black)]">
            Відновлення паролю
          </DialogTitle>
          <DialogDescription>
            Введіть Ваш email, після чого ми відправимо на нього новий пароль
          </DialogDescription>
        </DialogHeader>
        <PasswordRecoveryFormEmail />
        <DialogFooter className="items-center">
          <Button variant="link">Служба підтримки</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
