"use client";

import { Lock, Mail } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISingInForm } from "@/types";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";

import { logIn } from "@lib/redux/logIn/slice";
import { SignInSchema } from "@components/authForm/validationSchema";
import { BarLoader } from "react-spinners";
import { selectIsLoading } from "@lib/redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

export function SignInForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISingInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SignInSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<ISingInForm> = (data) => {
    alert(`Email: ${data.email}
    Password: ${data.password}
`);
    dispatch(closeModal("isSignIn"));
    dispatch(logIn());
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xl2:gap-8 flex flex-col gap-6"
      noValidate
    >
      <div className="relative w-full">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              icon={<Mail className="stroke-[var(--text-grey)]" size="16" />}
              className={
                errors.email &&
                "border-[var(--text-error)] bg-[var(--bg-error)]"
              }
              type="email"
              placeholder="Email"
            />
          )}
        />

        {errors.email && (
          <InputErrorMassage message={errors.email.message || ""} />
        )}
      </div>

      <div className="relative w-full">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              icon={<Lock className="stroke-[var(--text-grey)]" size="16" />}
              className={
                errors.password &&
                "border-[var(--text-error)] bg-[var(--bg-error)]"
              }
              type="password"
              showToggle={true}
              placeholder="Пароль"
            />
          )}
        />
        {errors.password && (
          <InputErrorMassage message={errors.password.message || ""} />
        )}
      </div>

      <Button className="font-semibold" disabled={isLoading}>
        {!isLoading ? (
          "Увійти"
        ) : (
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="xl2:text-[16px] text-[12px] leading-[1] md:text-[14px]">
              Відправка...
            </p>
            <BarLoader
              color="#04b22b"
              height={5}
              speedMultiplier={1}
              width={150}
            />
          </div>
        )}
      </Button>

      <Button
        variant="link"
        className="text-center font-normal text-[var(--text-link)]"
        onClick={() => {
          dispatch(closeModal("isSignIn"));
          dispatch(openModal("isPasswordRecoveryEmail"));
        }}
      >
        Забули пароль?
      </Button>
    </form>
  );
}
