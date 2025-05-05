// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@components/ui";
// import { Key } from "lucide-react";
// import { useEffect } from "react";
// import { notify } from "@components/notifi/notifi";
// import ResendTimer from "@components/authForm/validateForm/timer";
// import { useAppDispatch } from "@/lib/redux/hooks";
// import { clearError } from "@/lib/redux/auth/slice";

// interface OtpDialogProps {
//   formComponent: React.ReactNode;
//   isOpen: boolean;
//   onClose: () => void;
//   isSuccess: boolean;
//   successMessage: string;
//   onSuccess: () => void;
//   error?: string | null;
//   title?: string;
//   description?: string;
// }

// export const OtpDialog = ({
//   formComponent, // форма для відправки
//   isOpen, // назва модального вікна для компонента
//   onClose, // функція для закриття модального вікна
//   isSuccess, // тригер для успішного запиту
//   successMessage, // повідомлення нотіфікашка при успішному запиті
//   onSuccess, // функції при успішному запиті
//   error, // помилка при не успішному запиті
//   title = "Верифікація акаунта",
//   description = "Ми надіслали код на Ваш Email, перевірте папку Спам",
// }: OtpDialogProps) => {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     if (isSuccess) {
//       notify({ message: successMessage, type: "success" });
//       onSuccess();
//     }
//     if (error) {
//       notify({ message: error, type: "error" });
//       dispatch(clearError());
//     }
//   }, [successMessage, isSuccess, onSuccess, error, dispatch]);

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent
//         className="xl2:py-32 xl2:px-38 xl2:w-[636px] xl2:pt-10 xl2:pb-4 flex h-full max-h-3/5 w-[335px] flex-col justify-start gap-5 overflow-x-hidden overflow-y-auto px-4 pt-6 pb-6 sm:px-2 md:w-[465px] md:overflow-hidden md:px-4 md:py-20 md:pt-6 lg:pt-10"
//         aria-describedby={undefined}
//       >
//         <DialogHeader>
//           <Key size={56} />
//           <DialogTitle className="h3-text font-semibold text-[var(--text-black)]">
//             {title}
//           </DialogTitle>
//           <DialogDescription className="captions-text text-start text-[var(--text-black)]">
//             {description}
//           </DialogDescription>
//         </DialogHeader>

//         {formComponent}

//         <DialogFooter className="flex flex-1 flex-col justify-between">
//           <ResendTimer />
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import { Key } from "lucide-react";
import ResendTimer from "@components/authForm/validateForm/timer";

interface OtpDialogProps {
  formComponent: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export const OtpDialog = ({
  formComponent, // форма для відправки
  isOpen, // назва модального вікна для компонента
  onClose, // функція для закриття модального вікна
  title = "Верифікація акаунта",
  description = "Ми надіслали код на Ваш Email, перевірте папку Спам",
}: OtpDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="xl2:py-32 xl2:px-38 xl2:w-[636px] xl2:pt-10 xl2:pb-4 flex h-full max-h-3/5 w-[335px] flex-col justify-start gap-5 overflow-x-hidden overflow-y-auto px-4 pt-6 pb-6 sm:px-2 md:w-[465px] md:overflow-hidden md:px-4 md:py-20 md:pt-6 lg:pt-10"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <Key size={56} />
          <DialogTitle className="h3-text font-semibold text-[var(--text-black)]">
            {title}
          </DialogTitle>
          <DialogDescription className="captions-text text-start text-[var(--text-black)]">
            {description}
          </DialogDescription>
        </DialogHeader>

        {formComponent}

        <DialogFooter className="flex flex-1 flex-col justify-between">
          <ResendTimer />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
