"use client";
import { Button } from "@components/ui";
import { openModal } from "@lib/redux/toggleModal/slice";
import { AppDispatch } from "@lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "@components/authForm/signIn/SignIn";
import { SignUp } from "@components/authForm/signUp/SignUp";
import {
  selectIsLogOut,
  selectIsSignIn,
  selectIsSignUp,
} from "@lib/redux/toggleModal/selectors";
import { LogOut } from "@components/authForm/logOut/LogOut";
const useAppDispatch: () => AppDispatch = useDispatch;

const Footer = () => {
  const dispatch = useAppDispatch();
  const isSignIn = useSelector(selectIsSignIn);
  const isSignUp = useSelector(selectIsSignUp);

  const isLogOut = useSelector(selectIsLogOut);
  return (
    <footer>
      <div className="xl2:max-w-[90rem] xl2:px-18 xl2:py-3.5 mx-auto flex w-full flex-wrap items-center justify-between gap-16 py-6">
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
    </footer>
  );
};

export default Footer;
