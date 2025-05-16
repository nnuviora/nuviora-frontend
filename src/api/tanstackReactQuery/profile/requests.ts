import { api } from "@/api/authApi";
import { IProfileFormData } from "@/types";

export const fetchProfileApi = async () => {
  return await api.get(`/profile/me`);
};

export const editUserApi = async (
  userData: Omit<IProfileFormData, "email">,
) => {
  return await api.put("/profile/update_user_info", userData);
};
