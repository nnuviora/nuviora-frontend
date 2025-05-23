"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import { selectIsSignIn } from "@lib/redux/toggleModal/selectors";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { SignInForm } from "@components/authForm/signIn/SignInForm";
import FormFooter from "@components/authForm/formFooter";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

export const SignIn = () => {
  const isSignIn = useAppSelector(selectIsSignIn);
  const dispatch = useAppDispatch();

  return (
    <Dialog
      open={isSignIn}
      onOpenChange={() => dispatch(closeModal("isSignIn"))}
    >
      <DialogContent
        aria-describedby={undefined}
        className="flex min-h-3/5 w-[90%] max-w-[1280px] flex-col gap-0 p-0 lg:min-h-4/5 lg:flex-row"
      >
        <div className="xl2:px-25 xl2:w-1/2 flex w-full flex-col justify-center gap-4 px-5 py-15 sm:px-20 lg:w-2/3 lg:px-20">
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
            <FormFooter />
          </DialogFooter>
        </div>
        <div className="relative hidden lg:block lg:w-1/3 xl:w-1/2">
          <Image
            src="/image24.jpg"
            alt="Реєстрація"
            fill
            sizes="700px"
            style={{ objectFit: "cover" }}
            className="rounded-r-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
