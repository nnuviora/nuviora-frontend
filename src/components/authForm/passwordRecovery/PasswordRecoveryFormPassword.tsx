import { Lock } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { object, ObjectSchema, ref, string } from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@lib/utils";
import { IPasswordRecoveryPassword } from "@/types";

const passwordRecoverySchema: ObjectSchema<IPasswordRecoveryPassword> =
  object().shape({
    password: string()
      .min(6, "Minimum 6 character")
      .required("Password is required"),
    passwordConfirm: string()
      .oneOf([ref("password")], "Passwords must match")
      .required("Password confirmation is required"),
  });

export const PasswordRecoveryFormPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPasswordRecoveryPassword>({
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(passwordRecoverySchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IPasswordRecoveryPassword> = (data) => {
    alert(
      `Password: ${data.password.trim()}, 
       Passwords confirmed: ${data.passwordConfirm.trim()}`,
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

      <div className="relative w-full">
        <Controller
          name="passwordConfirm"
          control={control}
          render={({ field }) => (
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg border border-[var(--stroke-field)] bg-[var(--white)] px-3 py-2 transition focus-within:ring-2 focus-within:ring-[var(--button-primary-default)]",
                errors.passwordConfirm && "border-[var(--text-error)]",
              )}
            >
              <Lock className="stroke-[var(--text-grey)]" size="16" />
              <Input
                {...field}
                className="border-none p-0 placeholder-[var(--text-grey)] focus:ring-0"
                type="password"
                showToggle={true}
                placeholder="Підвердіть пароль"
              />
            </div>
          )}
        />
        {errors.passwordConfirm && (
          <InputErrorMassage message={errors.passwordConfirm.message || ""} />
        )}
      </div>

      <Button type="submit">Відновити пароль</Button>
    </form>
  );
};
