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
import { useEffect } from "react";
import { selectPendingUserId } from "@lib/redux/auth/selectors";

const useAppDispatch: () => AppDispatch = useDispatch;

export function SignUp() {
  const isSignUp = useSelector(selectIsSignUp);
  const pendingUserId = useSelector(selectPendingUserId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pendingUserId !== "") {
      dispatch(closeModal("isSignUp"));
      dispatch(openModal("isValidateOTP"));
    }
  }, [pendingUserId]);

  return (
    <Dialog
      open={isSignUp}
      onOpenChange={() => dispatch(closeModal("isSignUp"))}
    >
      <DialogContent
        aria-describedby={undefined}
        className="flex w-[90%] max-w-[1280px] flex-col gap-0 p-0 lg:flex-row"
      >
        <div className="xl2:px-25 flex w-full flex-col justify-center gap-4 px-5 py-15 sm:px-20 lg:w-2/3 lg:px-20 xl:w-1/2 xl:px-20">
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
                Вже маєте акаунт?
              </span>
              Увійти
            </Button>
            <FormFooter />
          </DialogFooter>
        </div>

        <div className="relative hidden lg:block lg:w-1/3 xl:w-1/2">
          <Image
            src="/image24.jpg"
            alt="Реєстрація"
            layout="fill"
            objectFit="cover"
            className="rounded-r-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
