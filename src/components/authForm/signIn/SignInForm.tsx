import { Lock, Mail } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { object, ObjectSchema, string } from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@lib/utils";
import { ISingInForm } from "@/types";

const SignInSchema: ObjectSchema<ISingInForm> = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "Minimum 6 character")
    .required("Password is required"),
});

export const SignInForm = () => {
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
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      noValidate
    >
      <div className="relative w-full">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg border border-[var(--stroke-field)] bg-[var(--white)] px-3 py-2 transition focus-within:ring-2 focus-within:ring-blue-500",
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
                "flex items-center gap-2 rounded-lg border border-[var(--stroke-field)] bg-[var(--white)] px-3 py-2 transition focus-within:ring-2 focus-within:ring-blue-500",
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
        {errors.password &&  <InputErrorMassage message={errors.password.message || ""} />}
      </div>

      <Button type="submit">Увійти</Button>
    </form>
  );
};
