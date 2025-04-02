"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Input, Button, useSidebar } from "@/components/ui";
import { cn } from "@/lib/utils";

interface PasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
}

export default function PasswordChangeForm() {
  const { state } = useSidebar();
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
      className="flex max-w-[597px] flex-col items-center justify-center gap-10"
    >
      <div
        className={cn(
          "flex w-full flex-col items-start gap-2",
          state === "expanded"
            ? "xl2:flex-row xl2:justify-between md:flex-col"
            : "md:flex-row md:justify-between",
        )}
      >
        <Label htmlFor="current" className="category-text">
          Старий пароль
        </Label>
        <div
          className={cn(
            "relative w-full",
            state === "expanded" ? "xl2:w-auto w-full" : "w-auto",
          )}
        >
          <Input
            id="current"
            type="password"
            showToggle={true}
            placeholder="Старий пароль"
            className={cn(
              "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
              state === "expanded"
                ? "xl2:w-[325px] md:w-full"
                : "md:ml-auto md:w-[325px]",
            )}
            {...register("oldPassword", { required: "Введіть старий пароль" })}
          />
          {errors.oldPassword && (
            <p className="absolute text-sm text-red-500">
              {errors.oldPassword.message}
            </p>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex w-full flex-col items-start gap-2",
          state === "expanded"
            ? "xl2:flex-row xl2:justify-between md:flex-col"
            : "md:flex-row md:justify-between",
        )}
      >
        <Label htmlFor="new" className="category-text">
          Новий пароль
        </Label>
        <div
          className={cn(
            "relative w-full",
            state === "expanded" ? "xl2:w-auto w-full" : "w-auto",
          )}
        >
          <Input
            id="new"
            type="password"
            showToggle={true}
            placeholder="Новий пароль"
            className={cn(
              "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
              state === "expanded"
                ? "xl2:w-[325px] md:w-full"
                : "md:ml-auto md:w-[325px]",
            )}
            {...register("newPassword", { required: "Введіть новий пароль" })}
          />
          {errors.newPassword && (
            <p className="absolute text-sm text-red-500">
              {errors.newPassword.message}
            </p>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex w-full flex-col items-start gap-2",
          state === "expanded"
            ? "xl2:flex-row xl2:justify-between md:flex-col"
            : "md:flex-row md:justify-between",
        )}
      >
        <Label htmlFor="new-repeat" className="category-text">
          Повторіть новий пароль
        </Label>
        <div
          className={cn(
            "relative w-full",
            state === "expanded" ? "xl2:w-auto w-full" : "w-auto",
          )}
        >
          <Input
            id="new-repeat"
            type="password"
            showToggle={true}
            placeholder="Повторіть новий пароль"
            className={cn(
              "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
              state === "expanded"
                ? "xl2:w-[325px] md:w-full"
                : "md:ml-auto md:w-[325px]",
            )}
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

      <Button
        type="submit"
        className={cn(
          "w-full",
          state === "expanded"
            ? "xl2:w-[325px] xl2:self-end"
            : "md:w-[325px] md:self-end",
        )}
      >
        Зберегти пароль
      </Button>
    </form>
  );
}
