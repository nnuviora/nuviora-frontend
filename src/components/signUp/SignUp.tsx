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
import { SingUpForm } from "@/components/signUp/SignUpForm";
import { FcGoogle } from "react-icons/fc";

const useAppDispatch: () => AppDispatch = useDispatch;

export function SignUp() {
  const isSignUp = useSelector(selectIsSignUp);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isSignUp}
      onOpenChange={() => dispatch(closeModal("isSignUp"))}
    >
      <DialogContent className="gap-4 px-8 py-27" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Реєстрація</DialogTitle>
        </DialogHeader>
        <SingUpForm />
        <DialogFooter>
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
          <p className="body-text text-[var(--text-grey)]">Aбо</p>
          <Button variant="outline" className="w-full">
            <div className="flex w-full items-center justify-center gap-4">
              <FcGoogle size={18} />
              <p>Продовжити з Google</p>
            </div>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
