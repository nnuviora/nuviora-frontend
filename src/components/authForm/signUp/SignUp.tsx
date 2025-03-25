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
import { selectIsSignUp } from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { SingUpForm } from "@components/authForm/signUp/SignUpForm";
import FormFooter from "@components/authForm/formFooter";

const useAppDispatch: () => AppDispatch = useDispatch;

export function SignUp() {
  const isSignUp = useSelector(selectIsSignUp);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isSignUp}
      onOpenChange={() => dispatch(closeModal("isSignUp"))}
    >
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="h2-text text-[var(--text-black)]">
            Реєстрація
          </DialogTitle>
        </DialogHeader>
        <SingUpForm />
        <DialogFooter className="gap-4">
          <Button
            variant="link"
            onClick={() => {
              dispatch(closeModal("isSignUp"));
              dispatch(openModal("isSignIn"));
            }}
          >
            <span className="body-text mr-1 text-[var(--text-grey)]">
              Вже маєта акаунт?
            </span>
            Увійти
          </Button>
          <FormFooter />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
