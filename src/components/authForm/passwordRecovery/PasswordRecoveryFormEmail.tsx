import { Mail } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IPasswordRecoveryEmail } from "@/types";
import { recoveryPassword } from "@/lib/redux/auth/operations";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { passwordRecoveryEmailSchema } from "../validationSchema";
import { selectIsLoading } from "@/lib/redux/auth/selectors";
import { BarLoader } from "react-spinners";

export const PasswordRecoveryFormEmail = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPasswordRecoveryEmail>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(passwordRecoveryEmailSchema),
  });

  const onSubmit: SubmitHandler<IPasswordRecoveryEmail> = (data) => {
    dispatch(recoveryPassword(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xl2:gap-8 flex flex-col gap-8"
      noValidate
    >
      <div className="relative w-full">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              icon={<Mail size="16" className="stroke-[var(--text-grey)]" />}
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
