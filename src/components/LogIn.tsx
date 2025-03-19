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
} from "@components/ui";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogIn } from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { closeModal } from "@lib/redux/toggleModal/slice";

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
        <div className="flex flex-col gap-6">
          <div>
            <Input
              className="col-span-3"
              type="email"
              name="email"
              placeholder="Адреса ектронної пошти"
            />
          </div>
          <div>
            <Input
              className="col-span-3"
              type="password"
              showToggle={true}
              name="password"
              placeholder="Створити пароль"
            />
          </div>
          <Button type="submit">Login</Button>
        </div>
        <DialogFooter className="items-center">
          <p>або</p>
          <Button variant="outline" className="w-full">Увійти за допомогою Google</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
