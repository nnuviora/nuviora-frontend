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
import { useId } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddressSchema } from "./addressValidationSchema";

export interface IAddressFormData {
  area: string;
  city: string;
  street: string;
  number: string;
}

export default function AddressChangeForm() {
  const id = useId();
  const { state } = useSidebar();
  const {
    control,
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddressFormData>({ resolver: yupResolver(AddressSchema) });

  const onSubmit: SubmitHandler<IAddressFormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-[597px] flex-col items-center justify-center gap-10"
      noValidate
    >
      <Controller
        control={control}
        name="area"
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
              Область
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
                placeholder="Київська"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.area && (
                <InputErrorMassage message={errors.area.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      {/* <div
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
      </div> */}
      {/* 
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
      </div> */}

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
