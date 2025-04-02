"use client";

import { useForm, Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { AppDispatch } from "@lib/redux/store";
import { useDispatch } from "react-redux";
import { validateRegistrationEmail } from "@lib/redux/auth/operations";
const useAppDispatch: () => AppDispatch = useDispatch;

export function EmailOTPForm() {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: { otp: "" },
  });

  const onSubmit = (data: { otp: string }) => {
    alert(`OTP Code:", ${data.otp}`);
    dispatch(validateRegistrationEmail(data.otp));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <Controller
        name="otp"
        control={control}
        rules={{ required: true, pattern: /^\d+$/ }}
        render={({ field }) => (
          <InputOTP
            maxLength={4}
            value={field.value}
            onChange={field.onChange}
            className="gap-2"
          >
            <InputOTPGroup className="gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      <Button
        type="submit"
        className="w-full bg-green-500 text-white md:max-w-104"
      >
        Підтвердити
      </Button>
    </form>
  );
}
