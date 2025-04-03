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
import { AddressSchema } from "./profileValidationSchema";
import { IAddressFormData } from "@/types/profileTypes";

export default function AddressChangeForm() {
  const id = useId();
  const { state } = useSidebar();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddressFormData>({
    defaultValues: {
      country: "",
      area: "",
      district: "",
      city: "",
      street: "",
      houseNumber: "",
      apartmentNumber: "",
    },
    resolver: yupResolver(AddressSchema),
  });

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
        name="country"
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
              Країна
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
                placeholder="Україна"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.country && (
                <InputErrorMassage message={errors.country.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="area"
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
                placeholder="Черкаська"
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

      <Controller
        name="district"
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
              Район
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
                placeholder="Черкаський"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.district && (
                <InputErrorMassage message={errors.district.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="city"
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
              Місто
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
                placeholder="Ка́нів"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.city && (
                <InputErrorMassage message={errors.city.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="street"
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
              Вулиця
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
                placeholder="Шевченка"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.street && (
                <InputErrorMassage message={errors.street.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="houseNumber"
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
              Будинок
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
                placeholder="102"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.houseNumber && (
                <InputErrorMassage message={errors.houseNumber.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="apartmentNumber"
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
              Квартира
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
                placeholder="1"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.apartmentNumber && (
                <InputErrorMassage
                  message={errors.apartmentNumber.message || ""}
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
        Зберегти адресу
      </Button>
    </form>
  );
}
