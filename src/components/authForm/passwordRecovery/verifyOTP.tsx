"use client";

import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { selectIsVerifyOTP } from "@lib/redux/toggleModal/selectors";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectAuthError, selectIsVerify } from "@/lib/redux/auth/selectors";
import { VerifyOTPForm } from "./verifyOTPForm";
import { OtpDialog } from "../OtpDialog";

export const VerifyOTP = () => {
  const dispatch = useAppDispatch();
  const isVerifyOTP = useAppSelector(selectIsVerifyOTP);
  const isVerify = useAppSelector(selectIsVerify);
  const error = useAppSelector(selectAuthError);

  const handleClose = () => dispatch(closeModal("isVerifyOTP"));
  const handleSuccess = () => {
    dispatch(closeModal("isVerifyOTP"));
    dispatch(openModal("isPasswordRecoveryPassword"));
  };

  return (
    <OtpDialog
      formComponent={<VerifyOTPForm />}
      isOpen={isVerifyOTP}
      onClose={handleClose}
      isSuccess={isVerify}
      successMessage="Верифікація пройшла успішно"
      onSuccess={handleSuccess}
      error={error}
      modal="isVerifyOTP"
    />
  );
};
