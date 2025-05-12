import { useMutation } from "@tanstack/react-query";
import { editUserApi } from "./requests";
import { notify } from "@/components/notifi/notifi";
import getQueryClient from "../getQueryClient";
import { IUser } from "@/lib/redux/types";

export function useUser() {
  const queryClient = getQueryClient();

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
      // queryClient.setQueryData(["profile"], (old: IUser) => ({
      //   ...old,
      //   ...newData,
      // }));

      queryClient.invalidateQueries({ queryKey: ["profile"] });

      notify({
        message: "Дані успішно оновлено!",
        type: "success",
      });
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });

  return { editUserMutation };
}
