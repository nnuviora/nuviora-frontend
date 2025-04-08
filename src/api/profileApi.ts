import { api } from "@/api/authApi";

export const fetchProfileApi = async () => {
  return await api.get(`/profile/me`);
};
