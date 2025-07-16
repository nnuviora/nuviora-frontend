import { useMutation } from "@tanstack/react-query";
import { editPasswordApi, editUserApi, updateUserAvatarApi } from "./requests";
import { notify } from "@/components/notifi/notifi";
import getQueryClient from "../getQueryClient";
import { IUser } from "@/lib/redux/types";
import { useInvalidateProfile } from "@/api/tanstackReactQuery/profile/queries";
import { handleAxiosError } from "@/lib/utils/handleError";

export function useUser() {
  const queryClient = getQueryClient();
  const invalidateProfile = useInvalidateProfile();
  const editUserMutation = useMutation({
    mutationFn: editUserApi,

    onMutate: async (newData) => {
      queryClient.cancelQueries({ queryKey: ["profile"] });

      const previousProfile = queryClient.getQueryData(["profile"]);

      queryClient.setQueryData(["profile"], (old: IUser) => ({
        ...old,
        ...newData,
      }));

      return { previousProfile };
    },

    onError: (err, newData, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }

      notify({ message: "Помилка оновлення", type: "error" });
    },

    onSuccess: () => {
      notify({
        message: "Дані успішно оновлено!",
        type: "success",
      });
    },

    onSettled: () => {
      invalidateProfile();
    },
  });

  const changePassword = useMutation({
    mutationFn: editPasswordApi,

    onSuccess: () => {
      notify({
        message: "Пароль успішно змінено!",
        type: "success",
      });
    },

    onError: handleAxiosError,
  });

  const updateUserAvatar = useMutation({
    mutationFn: updateUserAvatarApi,

    onSuccess: () => {
      notify({
        message: "Аватар успішно оновлено",
        type: "success",
      });
    },

    onError: handleAxiosError,
  });

  return { editUserMutation, changePassword, updateUserAvatar };
}
