// "use client";

// import { closeModal } from "@lib/redux/toggleModal/slice";
// import { EmailOTPForm } from "@components/authForm/validateForm/emailOtpForm";
// import { selectIsValidateOTP } from "@lib/redux/toggleModal/selectors";

// import {
//   selectAuthError,
//   selectIsAuthenticated,
// } from "@lib/redux/auth/selectors";
// import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
// import { OtpDialog } from "../OtpDialog";
// import { clearId } from "@/lib/redux/auth/slice";

// export const ValidateOTP = () => {
//   const dispatch = useAppDispatch();
//   const isValidateOTP = useAppSelector(selectIsValidateOTP);
//   const isAuthenticated = useAppSelector(selectIsAuthenticated);
//   const IsError = useAppSelector(selectAuthError);

//   const handleClose = () => {
//     dispatch(closeModal("isValidateOTP"));
//     dispatch(clearId());
//   };
//   const handleSuccess = () => {
//     dispatch(closeModal("isValidateOTP"));
//     dispatch(clearId());
//   };

//   return (
//     <OtpDialog
//       formComponent={<EmailOTPForm />}
//       isOpen={isValidateOTP}
//       onClose={handleClose}
//       isSuccess={isAuthenticated}
//       successMessage="Реєстрація успішна!"
//       onSuccess={handleSuccess}
//       error={IsError}
//     />
//   );
// };
"use client";

import { closeModal } from "@lib/redux/toggleModal/slice";
import { EmailOTPForm } from "@components/authForm/validateForm/emailOtpForm";
import { selectIsValidateOTP } from "@lib/redux/toggleModal/selectors";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { OtpDialog } from "../OtpDialog";

export const ValidateOTP = () => {
  const dispatch = useAppDispatch();
  const isValidateOTP = useAppSelector(selectIsValidateOTP);
  const handleClose = () => {
    dispatch(closeModal("isValidateOTP"));
  };

  return (
    <OtpDialog
      formComponent={<EmailOTPForm />}
      isOpen={isValidateOTP}
      onClose={handleClose}
    />
  );
};
