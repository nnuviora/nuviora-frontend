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
import { IPasswordFormData } from "@/types/profileTypes";
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
      className="flex max-w-[597px] flex-col items-center justify-center gap-10"
      noValidate
    >
      <Controller
        name="oldPassword"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "flex w-full flex-col items-start gap-2",
              state === "expanded"
                ? "xl2:flex-row xl2:justify-between md:flex-col"
                : "md:flex-row md:justify-between",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Старий пароль
            </Label>
            <div
              className={cn(
                "relative w-full",
                state === "expanded" ? "xl2:w-auto w-full" : "w-auto",
              )}
            >
              <Input
                id={`${id}+${field.name}`}
                {...field}
                type="text"
                showToggle={true}
                placeholder="Старий пароль"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
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
              "flex w-full flex-col items-start gap-2",
              state === "expanded"
                ? "xl2:flex-row xl2:justify-between md:flex-col"
                : "md:flex-row md:justify-between",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Новий пароль
            </Label>
            <div
              className={cn(
                "relative w-full",
                state === "expanded" ? "xl2:w-auto w-full" : "w-auto",
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
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
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
              "flex w-full flex-col items-start gap-2",
              state === "expanded"
                ? "xl2:flex-row xl2:justify-between md:flex-col"
                : "md:flex-row md:justify-between",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Повторіть новий пароль
            </Label>
            <div
              className={cn(
                "relative w-full",
                state === "expanded" ? "xl2:w-auto w-full" : "w-auto",
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
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
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
