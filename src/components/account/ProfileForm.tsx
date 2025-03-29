"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Input, Button } from "@/components/ui";
import { Textarea } from "../ui/textarea";

interface ProfileFormData {
  fullname: string;
  email: string;
  about: string;
}

export default function ProfileForm() {
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
      className="flex w-[597px] flex-col gap-10"
    >
      <div className="flex items-center justify-between">
        <Label htmlFor="fullname" className="category-text !font-semibold">
          П.І.П.
        </Label>
        <div className="relative">
          <Input
            id="fullname"
            className="h-10 w-[325px] border border-solid border-[var(--stroke-field)] px-3 py-2.5"
            placeholder="П.І.П."
            {...register("fullname", { required: "Це поле обов'язкове" })}
          />
          {errors.fullname && (
            <p className="absolute text-sm text-red-500">
              {errors.fullname.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="email" className="category-text !font-semibold">
          Email
        </Label>
        <div className="relative">
          <Input
            id="email"
            className="h-10 w-[325px] border border-solid border-[var(--stroke-field)] px-3 py-2.5"
            type="email"
            placeholder="pedro.pascal@example.com"
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

      <div className="flex items-center justify-between">
        <Label
          htmlFor="about"
          className="category-text self-start !font-semibold"
        >
          Про себе
        </Label>
        <Textarea
          id="about"
          className="w-[325px] border border-solid border-[var(--stroke-field)] px-3 py-2.5"
          placeholder="Enter a description..."
          {...register("about")}
        />
      </div>
      <Button type="submit" className="w-[325px] self-end">
        Зберегти зміни
      </Button>
    </form>
  );
}
