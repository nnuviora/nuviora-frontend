import { notify } from "@/components/notifi/notifi";
import { AxiosError } from "axios";

export const handleAxiosError = (error: unknown) => {
  const axiosError = error as AxiosError<{ detail?: string }>;
  const message = axiosError.response?.data?.detail || "Щось пішло не так ... ";
  notify({ message, type: "error" });
};
