"use client";

import { useForm, Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

type OtpFormProps = {
  onSubmitOtp: (otp: string) => void;
  maxLength?: number;
  buttonText?: string;
  className?: string;
};

export function OtpForm({
  onSubmitOtp,
  maxLength = 4,
  buttonText = "Підтвердити",
  className,
}: OtpFormProps) {
  const { control, handleSubmit } = useForm({ defaultValues: { otp: "" } });

  const onSubmit = (data: { otp: string }) => {
    onSubmitOtp(data.otp);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col items-center gap-4 ${className || ""}`}
    >
      <Controller
        name="otp"
        control={control}
        rules={{ required: true, pattern: /^\d+$/ }}
        render={({ field }) => (
          <InputOTP
            maxLength={maxLength}
            value={field.value}
            onChange={field.onChange}
            className="gap-2"
          >
            <InputOTPGroup className="gap-6">
              {Array.from({ length: maxLength }).map((_, index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      <Button className="w-full bg-green-500 text-white md:max-w-104">
        {buttonText}
      </Button>
    </form>
  );
}
