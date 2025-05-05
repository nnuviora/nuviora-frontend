// "use client";

// import { validateRegistrationEmail } from "@lib/redux/auth/operations";
// import { useAppDispatch } from "@/lib/redux/hooks";
// import { OtpForm } from "../OtpForm";

// export function EmailOTPForm() {
//   const dispatch = useAppDispatch();

//   return (
//     <OtpForm
//       onSubmitOtp={(otp) => dispatch(validateRegistrationEmail(otp))}
//       buttonText=""
//     />
//   );
// }

// ============================
// "use client";

// import { OtpForm } from "../OtpForm";
// import { useAuth } from "@/api/tanstackReactQuery/auth/mutations";

// export function EmailOTPForm() {
//   const { validateMutation } = useAuth();

//   return (
//     <OtpForm
//       onSubmitOtp={(otp) => validateMutation.mutate(otp)}
//       buttonText=""
//     />
//   );
// }
"use client";

import { OtpForm } from "../OtpForm";

export function EmailOTPForm() {
  return <OtpForm mutationName="validateMutation" />;
}
