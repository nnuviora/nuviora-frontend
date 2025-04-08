import { Mail } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@lib/utils";
import { IPasswordRecoveryEmail } from "@/types";
import { recoveryPassword } from "@/lib/redux/auth/operations";
import { useAppDispatch } from "@/lib/redux/hooks";
import { passwordRecoveryEmailSchema } from "../validationSchema";

export const PasswordRecoveryFormEmail = () => {
  const dispatch = useAppDispatch();

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
                "flex items-center gap-2 rounded-lg border border-[var(--stroke-field)] bg-[var(--white)] px-3 " +
                  "py-2 transition focus-within:ring-2 focus-within:ring-[var(--button-primary-default)]",
                errors.email && "border-[var(--text-error)]",
              )}
            >
              <Mail className="stroke-[var(--text-grey)]" size="16" />
              <Input
                {...field}
                className={cn(
                  "border-none p-0 placeholder-[var(--text-grey)] focus:ring-0",
                  errors.email &&
                    "border-[var(--text-error)] bg-[var(--bg-error)]",
                )}
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

      <Button type="submit">Відновити пароль</Button>
    </form>
  );
};
