import { api } from "@/api/authApi";
import { IPasswordFormData, IProfileFormData } from "@/types";

export const fetchProfileApi = async () => {
  return await api.get(`/profile/me`);
};

export const editUserApi = async (
  userData: Omit<IProfileFormData, "email">,
) => {
  return await api.put("/profile/update_user_info", userData);
};

export const editPasswordApi = async (userData: IPasswordFormData) => {
  return await api.put("/profile/change_password", userData);
};

export const updateUserAvatarApi = async (userData: any) => {
  console.log("userData :>> ", userData);
  return await api.put("/profile/upload-avatar", userData);
};
