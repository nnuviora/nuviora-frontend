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
import { SignInForm } from "@components/authForm/signIn/SignInForm";
import FormFooter from "@components/authForm/formFooter";
import Image from "next/image";

const useAppDispatch: () => AppDispatch = useDispatch;

export const SignIn = () => {
  const isSignIn = useSelector(selectIsSignIn);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isSignIn}
      onOpenChange={() => dispatch(closeModal("isSignIn"))}
    >
      <DialogContent
        aria-describedby={undefined}
        className="flex w-[90%] max-w-[1280px] flex-col gap-0 p-0 lg:flex-row"
      >
        <div className="xl2:px-25 flex w-full flex-col justify-center gap-4 px-5 py-15 sm:px-20 lg:w-1/2 lg:px-20">
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
                У вас ще немає акаунту?
              </span>
              Створити
            </Button>
            <FormFooter />
          </DialogFooter>
        </div>
        <div className="relative hidden w-1/2 lg:block">
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
};
