import { Lock } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@lib/utils";
import { IPasswordRecovery } from "@/types";
import { changePassword } from "@/lib/redux/auth/operations";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectIdUser, selectIsLoading } from "@/lib/redux/auth/selectors";
import { passwordRecoverySchema } from "../validationSchema";
import { BarLoader } from "react-spinners";

export const PasswordRecoveryFormPassword = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectIdUser);
  const isLoading = useAppSelector(selectIsLoading);

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

      <Button className="font-semibold" disabled={isLoading}>
        {!isLoading ? (
          "Відновити пароль"
        ) : (
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="xl2:text-[16px] text-[12px] leading-[1] md:text-[14px]">
              Перевірка
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
};
