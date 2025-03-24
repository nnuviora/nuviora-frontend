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
import { selectIsPasswordRecoveryPassword } from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { closeModal } from "@lib/redux/toggleModal/slice";
import { DialogDescription } from "@radix-ui/react-dialog";
import { ArrowLeft } from "lucide-react";
import { PasswordRecoveryFormPassword } from "@components/authForm/passwordRecovery/PasswordRecoveryFormPassword";

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
      <DialogContent className="gap-4 px-8 py-27" aria-describedby={undefined}>
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
          <DialogDescription>Введіть новий пароль</DialogDescription>
        </DialogHeader>
        <PasswordRecoveryFormPassword />
        <DialogFooter className="items-center">
          <Button variant="link">Служба підтримки</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
