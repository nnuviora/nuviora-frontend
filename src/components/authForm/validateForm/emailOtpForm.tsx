"use client";

import { validateRegistrationEmail } from "@lib/redux/auth/operations";
import { useAppDispatch } from "@/lib/redux/hooks";
import { OtpForm } from "../OtpForm";

export function EmailOTPForm() {
  const dispatch = useAppDispatch();

  return (
    <OtpForm
      onSubmitOtp={(otp) => dispatch(validateRegistrationEmail(otp))}
      buttonText=""
    />
  );
}
