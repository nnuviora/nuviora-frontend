"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@components/ui";

import { selectIsLogOut } from "@lib/redux/toggleModal/selectors";
import { closeModal } from "@lib/redux/toggleModal/slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { logOut } from "@/lib/redux/auth/operations";

export const LogOut = () => {
  const islogOut = useAppSelector(selectIsLogOut);
  const dispatch = useAppDispatch();

  return (
    <AlertDialog
      open={islogOut}
      onOpenChange={() => dispatch(closeModal("isLogOut"))}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              dispatch(closeModal("isLogOut"));
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
