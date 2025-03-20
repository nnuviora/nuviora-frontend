import { Lock, Mail } from "lucide-react";
import { Button, Input } from "@components/ui";
import { Checkbox } from "@/components/ui/checkbox";
import { boolean, object, ObjectSchema, ref, string } from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISingUpForm } from "@/types";
import { cn } from "@lib/utils/cn";

const SignUpSchema: ObjectSchema<ISingUpForm> = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "Minimum 6 character")
    .required("Password is required"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
  isTermsAccepted: boolean()
    .oneOf([true], "You must accept the terms")
    .required(),
});

export function SingUpForm() {
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
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<ISingUpForm> = (data) => {
    alert(`Email: ${data.email}
    Password: ${data.password}
    PasswordConfirm: ${data.passwordConfirm}
    TermsAccepted: ${data.isTermsAccepted}`);
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
          <p className="py-0.2 label-text absolute bottom-[-9px] left-2 rounded border border-[var(--text-error)] bg-[var(--bg-white)] px-2 text-xs text-[var(--text-error)] shadow-lg">
            {errors.email.message}
          </p>
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
        {errors.password && (
          <p className="py-0.2 label-text absolute bottom-[-9px] left-2 rounded border border-[var(--text-error)] bg-[var(--bg-white)] px-2 text-xs text-[var(--text-error)] shadow-lg">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="relative w-full">
        <Controller
          name="passwordConfirm"
          control={control}
          render={({ field }) => (
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg border border-[var(--stroke-field)] bg-[var(--white)] px-3 py-2 transition focus-within:ring-2 focus-within:ring-blue-500",
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
          <p className="py-0.2 label-text absolute bottom-[-9px] left-2 rounded border border-[var(--text-error)] bg-[var(--bg-white)] px-2 text-xs text-[var(--text-error)] shadow-lg">
            {errors.passwordConfirm.message}
          </p>
        )}
      </div>

      <div className="relative w-full">
        <Controller
          control={control}
          name="isTermsAccepted"
          render={({ field: { onChange } }) => (
            <div className="flex items-center space-x-2">
              <Checkbox
                onCheckedChange={(value) => {
                  onChange(value);
                }}
                id="isTermsAccepted"
              />
              <label
                htmlFor="isTermsAccepted"
                className="label-text leading-[1.4] text-[var(--text-black)]"
              >
                Я погоджуюся з умовами використання особистих даних на сервісі
              </label>
            </div>
          )}
        />
        {errors.isTermsAccepted && (
          <p className="py-0.2 label-text absolute bottom-[-15px] left-4.5 rounded border border-[var(--text-error)] bg-[var(--bg-white)] px-2 text-xs text-[var(--text-error)] shadow-lg">
            {errors.isTermsAccepted.message}
          </p>
        )}
      </div>

      <Button type="submit">Зареєструватися</Button>
    </form>
  );
}
