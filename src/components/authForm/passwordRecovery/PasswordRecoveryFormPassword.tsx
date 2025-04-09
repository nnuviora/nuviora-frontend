import { Lock } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@lib/utils";
import { IPasswordRecovery } from "@/types";
import { changePassword } from "@/lib/redux/auth/operations";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectIdUser } from "@/lib/redux/auth/selectors";
import { passwordRecoverySchema } from "../validationSchema";

export const PasswordRecoveryFormPassword = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectIdUser);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPasswordRecovery>({
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
    resolver: yupResolver(passwordRecoverySchema),
  });

  const onSubmit: SubmitHandler<IPasswordRecovery> = (data) => {
    dispatch(
      changePassword({
        id: userId,
        hash_password: data.password,
        repeat_password: data.repeatPassword,
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
          name="repeatPassword"
          control={control}
          render={({ field }) => (
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg border border-[var(--stroke-field)] bg-[var(--white)] px-3 py-2 transition focus-within:ring-2 focus-within:ring-[var(--button-primary-default)]",
                errors.repeatPassword && "border-[var(--text-error)]",
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
        {errors.repeatPassword && (
          <InputErrorMassage message={errors.repeatPassword.message || ""} />
        )}
      </div>

      <Button type="submit">Відновити пароль</Button>
    </form>
  );
};
