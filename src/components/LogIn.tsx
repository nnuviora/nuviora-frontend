"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
} from "@components/ui";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogIn } from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { closeModal } from "@lib/redux/toggleModal/slice";
import { cn } from "@lib/utils/cn";

const useAppDispatch: () => AppDispatch = useDispatch;

export function LogIn() {
  const isLogIn = useSelector(selectIsLogIn);
  const dispatch = useAppDispatch();
  return (
    <Dialog open={isLogIn} onOpenChange={() => dispatch(closeModal("isLogIn"))}>
      <DialogContent className="p-13">
        <DialogHeader className="gap-6">
          <DialogTitle className="h2-text text-[var(--base-green)]">
            Nuviora
          </DialogTitle>
          <DialogDescription className="subtitle3-text mb-12 text-[var(--black)]">
            Ласкаво просимо!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
