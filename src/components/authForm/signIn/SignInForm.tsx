"use client";
import { Lock, Mail } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@lib/utils";
import { ISingInForm } from "@/types";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { AppDispatch } from "@lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "@lib/redux/logIn/slice";
import { SignInSchema } from "@components/authForm/validationSchema";
import { BarLoader } from "react-spinners";
import { selectIsLoading } from "@lib/redux/auth/selectors";

const useAppDispatch: () => AppDispatch = useDispatch;

export function SignInForm() {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectIsLoading);

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
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg border border-[var(--stroke-field)] bg-[var(--white)] px-3 py-2 transition focus-within:ring-2 focus-within:ring-[var(--button-primary-default)]",
                errors.email && "border-[var(--text-error)]",
              )}
            >
              <Mail className="stroke-[var(--text-grey)]" size="16" />
              <Input
                {...field}
                className="border-none p-0 placeholder-[var(--text-grey)] focus:ring-0"
                type="email"
                placeholder="Email"
              />
            </div>
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
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg border border-[var(--stroke-field)] bg-[var(--white)] px-3 py-2 transition focus-within:ring-2 focus-within:ring-[var(--button-primary-default)]",
                errors.password && "border-[var(--text-error)]",
              )}
            >
              <Lock className="stroke-[var(--text-grey)]" size="16" />
              <Input
                {...field}
                className="border-none p-0 placeholder-[var(--text-grey)] focus:ring-0"
                type="password"
                showToggle={true}
                placeholder="Пароль"
              />
            </div>
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
