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

import { useDispatch, useSelector } from "react-redux";
import { selectIsLogOut } from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { closeModal } from "@lib/redux/toggleModal/slice";
import { logOut } from "@lib/redux/logIn/slice";

const useAppDispatch: () => AppDispatch = useDispatch;

export const LogOut = () => {
  const logOutState = useSelector(selectIsLogOut);
  const dispatch = useAppDispatch();

  return (
    <AlertDialog open={logOutState}>
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
              dispatch(closeModal("isLogOut"));
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
