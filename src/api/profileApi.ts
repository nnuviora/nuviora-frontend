import axios from "axios";
import { API_BASE_URL } from "@/constans";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const fetchProfileApi = async (token: string) => {
  return await api.get(`/profile/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
