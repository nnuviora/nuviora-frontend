"use client";

import { closeModal } from "@lib/redux/toggleModal/slice";
import { EmailOTPForm } from "@components/authForm/validateForm/emailOtpForm";
import { selectIsValidateOTP } from "@lib/redux/toggleModal/selectors";

import {
  selectAuthError,
  selectIsAuthenticated,
} from "@lib/redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { OtpDialog } from "../OtpDialog";

export const ValidateOTP = () => {
  const dispatch = useAppDispatch();
  const isValidateOTP = useAppSelector(selectIsValidateOTP);
  const isAutentificate = useAppSelector(selectIsAuthenticated);
  const IsError = useAppSelector(selectAuthError);

  const handleClose = () => dispatch(closeModal("isValidateOTP"));
  const handleSuccess = () => {
    dispatch(closeModal("isValidateOTP"));
  };

  return (
    <OtpDialog
      formComponent={<EmailOTPForm />}
      isOpen={isValidateOTP}
      onClose={handleClose}
      isSuccess={isAutentificate}
      successMessage="Реєстрація успішна!"
      onSuccess={handleSuccess}
      error={IsError}
      modal="isValidateOTP"
    />
  );
};
