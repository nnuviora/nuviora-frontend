// "use client";

// import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
// import { selectIsVerifyOTP } from "@lib/redux/toggleModal/selectors";

// import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
// import { selectAuthError, selectIsVerify } from "@/lib/redux/auth/selectors";
// import { VerifyOTPForm } from "./verifyOTPForm";
// import { OtpDialog } from "../OtpDialog";
// import { logOut } from "@/lib/redux/auth/operations";

// export const VerifyOTP = () => {
//   const dispatch = useAppDispatch();
//   const isVerifyOTP = useAppSelector(selectIsVerifyOTP);
//   const isVerify = useAppSelector(selectIsVerify);
//   const error = useAppSelector(selectAuthError);

//   const handleClose = () => {
//     dispatch(closeModal("isVerifyOTP"));
//     dispatch(logOut());
//   };
//   const handleSuccess = () => {
//     dispatch(closeModal("isVerifyOTP"));
//     dispatch(openModal("isPasswordRecoveryPassword"));
//   };

//   return (
//     <OtpDialog
//       formComponent={<VerifyOTPForm />}
//       isOpen={isVerifyOTP}
//       onClose={handleClose}
//       isSuccess={isVerify}
//       successMessage="Верифікація пройшла успішно"
//       onSuccess={handleSuccess}
//       error={error}
//     />
//   );
// };
"use client";

import { closeModal } from "@lib/redux/toggleModal/slice";
import { selectIsVerifyOTP } from "@lib/redux/toggleModal/selectors";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { VerifyOTPForm } from "./verifyOTPForm";
import { OtpDialog } from "../OtpDialog";
import { useAuth } from "@/api/tanstackReactQuery/auth/mutations";

export const VerifyOTP = () => {
  const dispatch = useAppDispatch();
  const isVerifyOTP = useAppSelector(selectIsVerifyOTP);

  const { logoutMutation } = useAuth();

  const handleClose = () => {
    dispatch(closeModal("isVerifyOTP"));
    logoutMutation.mutate();
  };

  return (
    <OtpDialog
      formComponent={<VerifyOTPForm />}
      isOpen={isVerifyOTP}
      onClose={handleClose}
    />
  );
};
