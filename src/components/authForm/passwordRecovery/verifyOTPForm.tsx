"use client";

import { verifyEmail } from "@lib/redux/auth/operations";
import { useAppDispatch } from "@/lib/redux/hooks";
import { OtpForm } from "../OtpForm";

export function VerifyOTPForm() {
  const dispatch = useAppDispatch();

  return <OtpForm onSubmitOtp={(otp) => dispatch(verifyEmail(otp))} />;
}
