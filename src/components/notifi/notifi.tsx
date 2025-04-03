import { toast } from "react-toastify";

const customId = "custom-id-yes";

interface NotifyType {
  message: string;
  type: "error" | "success" | "info";
}

export const notify = ({ message, type }: NotifyType) => {
  switch (type) {
    case "error":
      toast.error(message, { toastId: customId });
      break;
    case "success":
      toast.success(message, { toastId: customId });
      break;
    case "info":
      toast.info(message, { toastId: customId });
      break;
    default:
      toast(message, { toastId: customId }); // fallback вариант
  }
};
