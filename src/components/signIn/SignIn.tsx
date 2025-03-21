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
import { selectIsSignIn } from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { SignInForm } from "@components/signIn/SignInForm";
import { FcGoogle } from "react-icons/fc";

const useAppDispatch: () => AppDispatch = useDispatch;

export const SignIn = () => {
  const isSignIn = useSelector(selectIsSignIn);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isSignIn}
      onOpenChange={() => dispatch(closeModal("isSignIn"))}
    >
      <DialogContent className="gap-4 px-8 py-27" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="h2-text text-[var(--text-black)]">
            Вхід
          </DialogTitle>
        </DialogHeader>
        <SignInForm />
        <DialogFooter className="items-center">
          <Button
            variant="link"
            onClick={() => {
              dispatch(closeModal("isSignIn"));
              dispatch(openModal("isSignUp"));
            }}
          >
            <span className="body-text mr-1 text-[var(--text-grey)]">
              У вас ще немає аккаунту?
            </span>
            Створити
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
};
