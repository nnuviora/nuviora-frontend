import { useMutation } from "@tanstack/react-query";
import {
  changePasswordApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  requestRecoveryPasswordApi,
  resendValidationCodeApi,
  validateRegistrationEmailApi,
  verifyEmailApi,
} from "./requests";
import { useAppDispatch } from "@/lib/redux/hooks";
import {
  addAuthenticated,
  addId,
  addPasswordChange,
  addVerify,
  clearId,
  removeAuthenticated,
  removeResendEmail,
  removeVerify,
} from "@/lib/redux/auth/slice";
import getQueryClient from "../getQueryClient";

export function useAuth() {
  const dispatch = useAppDispatch();
  const queryClient = getQueryClient();

  const registerMutation = useMutation({
    mutationFn: registerUserApi,
    onSuccess: (response) => {
      dispatch(addId(response.data.id));
    },
  });

  const validateMutation = useMutation({
    mutationFn: validateRegistrationEmailApi,
    onSuccess: (response) => {
      localStorage.setItem("accessToken", response.data.access_token);
      dispatch(clearId());
      dispatch(addAuthenticated());
    },
  });

  const resendValidationCode = useMutation({
    mutationFn: resendValidationCodeApi,
    onSuccess: () => {
      dispatch(removeResendEmail());
    },
  });

  const loginMutation = useMutation({
    mutationFn: loginUserApi,
    onSuccess: (response) => {
      localStorage.setItem("accessToken", response.data.access_token);
      dispatch(addAuthenticated());
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      dispatch(removeAuthenticated());
      queryClient.clear();
    },
  });

  const requestRecoveryPasswordMutation = useMutation({
    mutationFn: requestRecoveryPasswordApi,
    onSuccess: (response) => {
      dispatch(addId(response.data.id));
    },
  });

  const verifyEmailMutation = useMutation({
    mutationFn: verifyEmailApi,
    onSuccess: () => {
      dispatch(addVerify());
    },
  });

  const changePasswordMutation = useMutation({
    mutationFn: changePasswordApi,
    onSuccess: () => {
      dispatch(removeVerify());
      dispatch(clearId());
      dispatch(addPasswordChange());
    },
  });

  return {
    registerMutation,
    validateMutation,
    resendValidationCode,
    loginMutation,
    logoutMutation,
    requestRecoveryPasswordMutation,
    verifyEmailMutation,
    changePasswordMutation,
  };
}
