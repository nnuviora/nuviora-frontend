"use client";
import { Lock, Mail } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISingUpForm } from "@/types";

import { SignUpSchema } from "@components/authForm/validationSchema";
import { registerUser } from "@lib/redux/auth/operations";
import { Checkbox } from "@components/ui/checkbox";
import { selectIsLoading } from "@lib/redux/auth/selectors";
import { BarLoader } from "react-spinners";
import { useId } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

export function SingUpForm() {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const uniqueId = useId();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISingUpForm>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      isTermsAccepted: false,
    },
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<ISingUpForm> = (data) => {
    dispatch(
      registerUser({
        email: data.email,
        hash_password: data.password,
        repeat_password: data.passwordConfirm,
      }),
    );
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

      <div className="relative w-full">
        <Controller
          name="passwordConfirm"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              icon={<Lock className="stroke-[var(--text-grey)]" size="16" />}
              className={
                errors.passwordConfirm &&
                "border-[var(--text-error)] bg-[var(--bg-error)]"
              }
              type="password"
              showToggle={true}
              placeholder="Підвердіть пароль"
            />
          )}
        />
        {errors.passwordConfirm && (
          <InputErrorMassage message={errors.passwordConfirm.message || ""} />
        )}
      </div>

      <div className="relative w-full">
        <Controller
          control={control}
          name="isTermsAccepted"
          render={({ field }) => (
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                id={uniqueId}
              />
              <label
                htmlFor={uniqueId}
                className="captions-text text-[var(--text-black)]"
              >
                Я погоджуюся з умовами використання особистих даних на сервісі
              </label>
            </div>
          )}
        />
        {errors.isTermsAccepted && (
          <InputErrorMassage message={errors.isTermsAccepted.message || ""} />
        )}
      </div>

      <Button className="font-semibold" disabled={isLoading}>
        {!isLoading ? (
          "Зареєструватися"
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
    </form>
  );
}
