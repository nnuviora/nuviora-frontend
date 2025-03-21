"use client";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSignIn,
  selectIsLogOut,
  selectIsSignUp,
  selectIsUserProfile,
} from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { Modal } from "@components/ui_old";
import { Button } from "@components/ui";
import { SignUp } from "@/components/signUp/SignUp";
import { SignIn } from "../signIn/SignIn";
import { LogOut } from "../logOut/LogOut";

const useAppDispatch: () => AppDispatch = useDispatch;
export function Header() {
  const dispatch = useAppDispatch();
  const isSignIn = useSelector(selectIsSignIn);
  const isSignUp = useSelector(selectIsSignUp);
  const isUserProfile = useSelector(selectIsUserProfile);
  const isLogOut = useSelector(selectIsLogOut);
  return (
    <header>
      <div className="mb-6 flex flex-wrap items-center gap-16 py-6">
        <Button onClick={() => dispatch(openModal("isSignIn"))}>Log In</Button>
        <Button onClick={() => dispatch(openModal("isLogOut"))}>Log Out</Button>
        <Button onClick={() => dispatch(openModal("isSignUp"))}>
          Register
        </Button>
        <Button onClick={() => dispatch(openModal("isUserProfile"))}>
          User Profile
        </Button>
      </div>

      {isSignIn && <SignIn />}
      {isLogOut && <LogOut />}
      {isSignUp && <SignUp />}
      {isUserProfile && (
        <Modal
          isOpen={isUserProfile}
          onClose={() => dispatch(closeModal("isUserProfile"))}
        >
          <p>User Profile</p>
          <Button onClick={() => dispatch(closeModal("isUserProfile"))}>
            Закрыть
          </Button>
        </Modal>
      )}
    </header>
  );
}

export default Header;
