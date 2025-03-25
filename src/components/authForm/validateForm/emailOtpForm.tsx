"use client";

import { useForm, Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function EmailOTPForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: { otp: "" },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: { otp: string }) => {
    setIsSubmitting(true);

    alert(`OTP Code:", ${data.otp}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <Controller
        name="otp"
        control={control}
        rules={{ required: true, pattern: /^\d{6}$/ }}
        render={({ field }) => (
          <InputOTP
            maxLength={6}
            value={field.value}
            onChange={field.onChange}
            className="gap-2"
          >
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      <Button
        type="submit"
        className="w-full bg-green-500 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Проверка..." : "Подтвердить"}
      </Button>
    </form>
  );
}
