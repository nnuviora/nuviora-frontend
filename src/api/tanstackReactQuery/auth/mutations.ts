import { useMutation } from "@tanstack/react-query";
import {
  registerUserApi,
  resendValidationCodeApi,
  validateRegistrationEmailApi,
} from "./requests";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addAuthenticated, addId, clearId } from "@/lib/redux/auth/slice";

export function useAuth() {
  const dispatch = useAppDispatch();

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
  });

  return { registerMutation, validateMutation, resendValidationCode };
}
