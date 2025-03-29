"use client";
import { Lock, Mail } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { object, ObjectSchema, string } from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@lib/utils";
import { ISingInForm } from "@/types";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { AppDispatch } from "@lib/redux/store";
import { useDispatch } from "react-redux";
import { logIn } from "@lib/redux/logIn/slice";

const useAppDispatch: () => AppDispatch = useDispatch;

const SignInSchema: ObjectSchema<ISingInForm> = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "Minimum 6 character")
    .required("Password is required"),
});

export function SignInForm() {
  const dispatch = useAppDispatch();

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
    reset();
    dispatch(closeModal("isSignIn"));
    dispatch(logIn());
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

      {/* не можу перебити font-weight на 400 */}

      {/* не можу перебити font-weight на 600 */}
      <Button type="submit" className="mt-4 font-semibold">
        Увійти
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
