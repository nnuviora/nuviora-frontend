"use client";
import { Lock, Mail } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISingUpForm } from "@/types";

import { SignUpSchema } from "@components/authForm/validationSchema";
import { Checkbox } from "@components/ui/checkbox";
import { BarLoader } from "react-spinners";
import { useId } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useAuth } from "@/api/tanstackReactQuery/auth/mutations";
import { notify } from "@components/notifi/notifi";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { AxiosError } from "axios";

export function SingUpForm() {
  const dispatch = useAppDispatch();
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
  const { registerMutation } = useAuth();

  const onSubmit: SubmitHandler<ISingUpForm> = (data) => {
    registerMutation.mutate({
      email: data.email,
      hash_password: data.password,
      repeat_password: data.passwordConfirm,
    });

    reset();
  };

  if (registerMutation.isSuccess) {
    notify({
      message: "На ваш email відправлено код підтвердження",
      type: "success",
    });
    dispatch(closeModal("isSignUp"));
    dispatch(openModal("isValidateOTP"));
  }

  if (registerMutation.isError) {
    const axiosError = registerMutation.error as AxiosError<{
      detail?: string;
    }>;
    const error = axiosError.response?.data?.detail || "Щось пішло не так ... ";
    notify({ message: error, type: "error" });
    registerMutation.reset();
  }

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

      <Button className="font-semibold" disabled={registerMutation.isPending}>
        {!registerMutation.isPending ? (
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
