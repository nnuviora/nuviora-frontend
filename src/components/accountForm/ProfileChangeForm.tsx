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
import { Textarea } from "../ui/textarea";
import { ProfileSchema } from "./profileValidationSchema";
import { IProfileFormData } from "@/types/profileTypes";

export default function ProfileChangeForm() {
  const id = useId();
  const { state } = useSidebar();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileFormData>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      about: "",
    },
    resolver: yupResolver(ProfileSchema),
  });

  const onSubmit: SubmitHandler<IProfileFormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[597px] flex-col items-center justify-center gap-10"
    >
      <Controller
        name="firstname"
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
              Ім&apos;я
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
                placeholder="Тарас"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.firstname && (
                <InputErrorMassage message={errors.firstname.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="lastname"
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
              Прізвище
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
                placeholder="Шевченко"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.lastname && (
                <InputErrorMassage message={errors.lastname.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="email"
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
              Email
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
                placeholder="sto.hryven@example.com"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "xl2:w-[325px] md:w-full"
                    : "md:ml-auto md:w-[325px]",
                )}
              />
              {errors.email && (
                <InputErrorMassage message={errors.email.message || ""} />
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="about"
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
              Про себе
            </Label>

            <Textarea
              id={`${id}+${field.name}`}
              {...field}
              className={cn(
                "border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                state === "expanded"
                  ? "xl2:w-[325px] md:w-full"
                  : "md:w-[325px]",
              )}
              placeholder="Мені тринадцятий минало..."
            />
            {errors.about && (
              <InputErrorMassage message={errors.about.message || ""} />
            )}
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
        Зберегти зміни
      </Button>
    </form>
  );
}
