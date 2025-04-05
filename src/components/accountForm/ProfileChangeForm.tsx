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
import { IProfileFormData } from "@/types";

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
      className="xl2:max-w-[597px] flex w-full max-w-[450px] flex-col justify-center gap-6"
      noValidate
    >
      <Controller
        name="lastname"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Прізвище
            </Label>
            <div className={cn("xl2:w-auto relative w-full")}>
              <Input
                id={`${id}+${field.name}`}
                {...field}
                type="text"
                placeholder="Шевченко"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "md:w-[325px]"
                    : "xl2:w-[325px] md:w-full",
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
        name="firstname"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Ім&apos;я
            </Label>
            <div className={cn("xl2:w-auto relative w-full")}>
              <Input
                id={`${id}+${field.name}`}
                {...field}
                type="text"
                placeholder="Тарас"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "md:w-[325px]"
                    : "xl2:w-[325px] md:w-full",
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
        name="email"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Email
            </Label>
            <div className={cn("xl2:w-auto relative w-full")}>
              <Input
                id={`${id}+${field.name}`}
                {...field}
                type="text"
                placeholder="sto.hryven@example.com"
                className={cn(
                  "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                  state === "expanded"
                    ? "md:w-[325px]"
                    : "xl2:w-[325px] md:w-full",
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
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Про себе
            </Label>

            <Textarea
              id={`${id}+${field.name}`}
              {...field}
              className={cn(
                "xl2:w-[325px] placeholder:text-[14px]",
                state === "expanded" ? "md:w-[325px]" : "md:w-full",
              )}
              placeholder="Мені тринадцятий минало..."
            />
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
        Зберегти зміни
      </Button>
    </form>
  );
}
