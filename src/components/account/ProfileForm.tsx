"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Input, Button, useSidebar } from "@/components/ui";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

interface ProfileFormData {
  firstname: string;
  lastname: string;
  email: string;
  about: string;
}

export default function ProfileForm() {
  const { state } = useSidebar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>();

  const onSubmit: SubmitHandler<ProfileFormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[597px] flex-col items-center justify-center gap-10"
    >
      <div
        className={cn(
          "flex w-full flex-col items-start gap-2",
          state === "expanded"
            ? "xl2:flex-row xl2:justify-between md:flex-col"
            : "md:flex-row md:justify-between",
        )}
      >
        <Label htmlFor="firstname" className="category-text">
          Ім&apos;я
        </Label>
        <div
          className={cn(
            "relative w-full",
            state === "expanded" ? "xl2:w-auto w-full" : "w-auto",
          )}
        >
          <Input
            id="firstname"
            className={cn(
              "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
              state === "expanded"
                ? "xl2:w-[325px] md:w-full"
                : "md:ml-auto md:w-[325px]",
            )}
            placeholder="Тарас"
            {...register("firstname", { required: "Це поле обов'язкове" })}
          />
          {errors.firstname && (
            <p className="absolute text-sm text-red-500">
              {errors.firstname.message}
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
        <Label htmlFor="lastname" className="category-text">
          Прізвище
        </Label>
        <div
          className={cn(
            "relative w-full",
            state === "expanded" ? "xl2:w-auto w-full" : "w-auto",
          )}
        >
          <Input
            id="lastname"
            className={cn(
              "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
              state === "expanded"
                ? "xl2:w-[325px] md:w-full"
                : "md:ml-auto md:w-[325px]",
            )}
            placeholder="Шевченко"
            {...register("lastname", { required: "Це поле обов'язкове" })}
          />
          {errors.lastname && (
            <p className="absolute text-sm text-red-500">
              {errors.lastname.message}
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
        <Label htmlFor="email" className="category-text">
          Email
        </Label>
        <div
          className={cn(
            "relative w-full",
            state === "expanded" ? "xl2:w-auto w-full" : "w-auto",
          )}
        >
          <Input
            id="email"
            className={cn(
              "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
              state === "expanded"
                ? "xl2:w-[325px] md:w-full"
                : "md:ml-auto md:w-[325px]",
            )}
            type="email"
            placeholder="sto.hryven@example.com"
            {...register("email", {
              required: "Це поле обов'язкове",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Невірний формат email",
              },
            })}
          />
          {errors.email && (
            <p className="absolute text-sm text-red-500">
              {errors.email.message}
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
        <Label htmlFor="about" className="category-text md:self-start">
          Про себе
        </Label>
        <Textarea
          id="about"
          className={cn(
            "border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
            state === "expanded" ? "xl2:w-[325px] md:w-full" : "md:w-[325px]",
          )}
          placeholder="Мені тринадцятий минало..."
          {...register("about")}
        />
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
        Зберегти зміни
      </Button>
    </form>
  );
}
