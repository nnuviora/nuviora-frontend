"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Label,
  Input,
  Button,
  useSidebar,
  InputErrorMassage,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { IPasswordFormData } from "@/types";
import { useId } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordSchema } from "./profileValidationSchema";

export default function PasswordChangeForm() {
  const id = useId();
  const { state } = useSidebar();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswordFormData>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordRepeat: "",
    },
    resolver: yupResolver(PasswordSchema),
  });

  const onSubmit: SubmitHandler<IPasswordFormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xl2:max-w-[597px] flex w-full max-w-[450px] flex-col justify-center gap-6"
      noValidate
    >
      <Controller
        name="oldPassword"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Старий пароль
            </Label>
            <div
              className={cn(
                "xl2:w-[325px] relative w-full",
                state === "expanded" ? "md:w-[325px]" : "md:w-full",
              )}
            >
              <Input
                id={`${id}+${field.name}`}
                {...field}
                type="text"
                showToggle={true}
                placeholder="Старий пароль"
                className={cn(
                  "h-10 w-full border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                )}
              />
              {errors.oldPassword && (
                <InputErrorMassage message={errors.oldPassword.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="newPassword"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Новий пароль
            </Label>
            <div
              className={cn(
                "xl2:w-[325px] relative w-full",
                state === "expanded" ? "md:w-[325px]" : "md:w-full",
              )}
            >
              <Input
                id={`${id}+${field.name}`}
                {...field}
                type="text"
                showToggle={true}
                placeholder="Новий пароль"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                )}
              />
              {errors.newPassword && (
                <InputErrorMassage message={errors.newPassword.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="newPasswordRepeat"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Повторіть новий пароль
            </Label>
            <div
              className={cn(
                "xl2:w-[325px] relative w-full",
                state === "expanded" ? "md:w-[325px]" : "md:w-full",
              )}
            >
              <Input
                id={`${id}+${field.name}`}
                {...field}
                type="text"
                showToggle={true}
                placeholder="Повторіть новий пароль"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                )}
              />
              {errors.newPasswordRepeat && (
                <InputErrorMassage
                  message={errors.newPasswordRepeat.message || ""}
                />
              )}
            </div>
          </div>
        )}
      />

      <Button
        type="submit"
        size="default"
        className={cn(
          "xl2:w-[325px] xl2:self-end mt-4 w-full",
          state === "expanded" ? "md:w-[325px]" : "md:w-full",
        )}
      >
        Зберегти пароль
      </Button>
    </form>
  );
}
