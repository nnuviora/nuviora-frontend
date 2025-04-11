"use client";

import { useForm, Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";
import { selectIsLoading } from "@/lib/redux/auth/selectors";
import { useAppSelector } from "@/lib/redux/hooks";

type OtpFormProps = {
  onSubmitOtp: (otp: string) => void;
  maxLength?: number;
  buttonText?: string;
  className?: string;
};

export function OtpForm({
  onSubmitOtp,
  maxLength = 4,
  buttonText = "Перевірка",
  className,
}: OtpFormProps) {
  const isLoading = useAppSelector(selectIsLoading);
  console.log("isLoading :>> ", isLoading);
  const { control, handleSubmit } = useForm({ defaultValues: { otp: "" } });

  const onSubmit = (data: { otp: string }) => {
    onSubmitOtp(data.otp);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col items-center gap-5 ${className || ""}`}
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
            <InputOTPGroup className="gap-4">
              {Array.from({ length: maxLength }).map((_, index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      <Button className="h-12 w-full font-semibold" disabled={isLoading}>
        {!isLoading ? (
          "Відновити пароль"
        ) : (
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="xl2:text-[16px] text-[12px] leading-[1] md:text-[14px]">
              {buttonText}
            </p>
            <BarLoader
              color="#04b22b"
              height={5}
              speedMultiplier={1}
              width={150}
            />
          </div>
        )}
      </Button>
    </form>
  );
}
