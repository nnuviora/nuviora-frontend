// "use client";

// import { verifyEmail } from "@lib/redux/auth/operations";
// import { useAppDispatch } from "@/lib/redux/hooks";
// import { OtpForm } from "../OtpForm";

// export function VerifyOTPForm() {
//   const dispatch = useAppDispatch();

//   return <OtpForm onSubmitOtp={(otp) => dispatch(verifyEmail(otp))} />;
// }
"use client";

import { OtpForm } from "../OtpForm";
import { useAuth } from "@/api/tanstackReactQuery/auth/mutations";

export function VerifyOTPForm() {
  const { verifyEmailMutation } = useAuth();

  return <OtpForm onSubmitOtp={(otp) => verifyEmailMutation.mutate(otp)} />;
}
