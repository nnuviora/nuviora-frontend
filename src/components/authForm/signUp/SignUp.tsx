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
import Image from "next/image";

const useAppDispatch: () => AppDispatch = useDispatch;

export function SignUp() {
  const isSignUp = useSelector(selectIsSignUp);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isSignUp}
      onOpenChange={() => dispatch(closeModal("isSignUp"))}
    >
      <DialogContent
        aria-describedby={undefined}
        className="flex w-[90%] max-w-[1280px] flex-col gap-0 p-0 md:flex-row"
      >
        <div className="flex w-full flex-col justify-center gap-4 px-5 py-15 md:w-1/2">
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
        </div>
        <div className="relative hidden w-1/2 md:block">
          <Image
            src="/image24.jpg"
            alt="Регистрация"
            layout="fill"
            objectFit="cover"
            className="rounded-r-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
