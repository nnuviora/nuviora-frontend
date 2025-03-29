"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Input, Button } from "@/components/ui";

interface PasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
}

export default function PasswordChangeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PasswordFormData>();

  const onSubmit: SubmitHandler<PasswordFormData> = (data) => {
    console.log(data);
  };

  const validatePasswordMatch = (value: string) => {
    return value === watch("newPassword") || "Паролі не збігаються";
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[597px] flex-col gap-10"
    >
      <div className="flex items-center justify-between">
        <Label htmlFor="current" className="category-text !font-semibold">
          Старий пароль
        </Label>
        <div className="relative">
          <Input
            id="current"
            type="password"
            showToggle={true}
            placeholder="Старий пароль"
            className="h-10 w-[325px] border border-solid border-[var(--stroke-field)] px-3 py-2.5"
            {...register("oldPassword", { required: "Введіть старий пароль" })}
          />
          {errors.oldPassword && (
            <p className="absolute text-sm text-red-500">
              {errors.oldPassword.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="new" className="category-text !font-semibold">
          Новий пароль
        </Label>
        <div className="relative">
          <Input
            id="new"
            type="password"
            showToggle={true}
            placeholder="Новий пароль"
            className="h-10 w-[325px] border border-solid border-[var(--stroke-field)] px-3 py-2.5"
            {...register("newPassword", { required: "Введіть новий пароль" })}
          />
          {errors.newPassword && (
            <p className="absolute text-sm text-red-500">
              {errors.newPassword.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="new-repeat" className="category-text !font-semibold">
          Повторіть новий пароль
        </Label>
        <div className="relative">
          <Input
            id="new-repeat"
            type="password"
            showToggle={true}
            placeholder="Повторіть новий пароль"
            className="h-10 w-[325px] border border-solid border-[var(--stroke-field)] px-3 py-2.5"
            {...register("newPasswordRepeat", {
              required: "Повторіть новий пароль",
              validate: validatePasswordMatch,
            })}
          />
          {errors.newPasswordRepeat && (
            <p className="absolute text-sm text-red-500">
              {errors.newPasswordRepeat.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-[325px] self-end">
        Зберегти пароль
      </Button>
    </form>
  );
}
