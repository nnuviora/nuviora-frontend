import { useMutation } from "@tanstack/react-query";
import {
  changePasswordApi,
  fetchGoogleAuthApi,
  fetchGoogleCallbackApi,
  GenericResponse,
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
  clearId,
  removeAuthenticated,
} from "@/lib/redux/auth/slice";
import getQueryClient from "../getQueryClient";
import { AxiosResponse } from "axios";
import { notify } from "@/components/notifi/notifi";
import { closeModal, openModal } from "@/lib/redux/toggleModal/slice";
import { handleAxiosError } from "@/lib/utils/handleError";

export function useAuth() {
  const dispatch = useAppDispatch();
  const queryClient = getQueryClient();

  const registerMutation = useMutation({
    mutationFn: registerUserApi,
    onSuccess: (response) => {
      notify({
        message: "На ваш email відправлено код підтвердження!",
        type: "success",
      });

      dispatch(addId(response.data.id));
      dispatch(closeModal("isSignUp"));
      dispatch(openModal("isValidateOTP"));
    },
    onError: handleAxiosError,
  });

  const validateMutation = useMutation({
    mutationFn: validateRegistrationEmailApi,
    onSuccess: (response) => {
      notify({
        message: "Реєстрація успішна!",
        type: "success",
      });
      localStorage.setItem("accessToken", response.data.access_token);
      dispatch(clearId());
      dispatch(addAuthenticated());
      dispatch(closeModal("isValidateOTP"));
    },
    onError: handleAxiosError,
  });

  const resendValidationCode = useMutation({
    mutationFn: resendValidationCodeApi,
    onSuccess: () => {
      notify({ message: "Код повторно відправлений!", type: "success" });
    },
    onError: handleAxiosError,
  });

  const loginMutation = useMutation({
    mutationFn: loginUserApi,
    onSuccess: (response) => {
      notify({ message: "Аутентифікація успішна!", type: "success" });
      localStorage.setItem("accessToken", response.data.access_token);
      dispatch(closeModal("isSignIn"));
      dispatch(addAuthenticated());
    },
    onError: handleAxiosError,
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
      notify({ message: "Код для верифікації надіслано", type: "success" });
      dispatch(addId(response.data.id));
      dispatch(closeModal("isPasswordRecoveryEmail"));
      dispatch(openModal("isVerifyOTP"));
    },
    onError: handleAxiosError,
  });

  const verifyEmailMutation = useMutation<
    AxiosResponse<GenericResponse>,
    Error,
    string
  >({
    mutationFn: verifyEmailApi,
    onSuccess: () => {
      notify({ message: "Верифікація пройшла успішно!", type: "success" });
      dispatch(closeModal("isVerifyOTP"));
      dispatch(openModal("isPasswordRecoveryPassword"));
    },
    onError: handleAxiosError,
  });

  const changePasswordMutation = useMutation({
    mutationFn: changePasswordApi,
    onSuccess: () => {
      dispatch(clearId());
      notify({ message: "Пароль успішно змінено", type: "success" });
      dispatch(closeModal("isPasswordRecoveryPassword"));
      dispatch(openModal("isSignIn"));
    },
    onError: handleAxiosError,
  });

  const getGoogleAuthUrlMutation = useMutation({
    mutationFn: fetchGoogleAuthApi,
    onSuccess: (res) => {
      window.location.href = res.data.url;
    },
    onError: handleAxiosError,
  });

  const googleCallbackMutation = useMutation({
    mutationFn: fetchGoogleCallbackApi,
    onSuccess: (response) => {
      localStorage.setItem("accessToken", response.data.access_token);
      dispatch(addAuthenticated());
    },
    onError: handleAxiosError,
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
    getGoogleAuthUrlMutation,
    googleCallbackMutation,
  };
}
