"use client";

import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { selectIsVerifyOTP } from "@lib/redux/toggleModal/selectors";

import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectAuthError, selectIsVerify } from "@/lib/redux/auth/selectors";
import { clearError } from "@/lib/redux/auth/slice";
import { VerifyOTPForm } from "./verifyOTPForm";
import { OtpDialog } from "../OtpDialog";

export const VerifyOTP = () => {
  const dispatch = useAppDispatch();
  const isVerifyOTP = useAppSelector(selectIsVerifyOTP);
  const isVerify = useAppSelector(selectIsVerify);
  const IsError = useAppSelector(selectAuthError);

  const handleClose = () => dispatch(closeModal("isVerifyOTP"));
  const handleSuccess = useCallback(() => {
    dispatch(closeModal("isVerifyOTP"));
    dispatch(openModal("isPasswordRecoveryPassword"));
  }, [dispatch]);
  const handleError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return (
    <OtpDialog
      formComponent={<VerifyOTPForm />}
      isOpen={isVerifyOTP}
      onClose={handleClose}
      isSuccess={isVerify}
      successMessage="Автентифікація успішна!"
      onSuccess={handleSuccess}
      error={IsError}
      onError={handleError}
      modal="isVerifyOTP"
    />
  );
};
