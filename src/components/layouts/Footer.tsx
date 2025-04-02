"use client";
import { Button } from "@components/ui";
import { openModal } from "@lib/redux/toggleModal/slice";
import { AppDispatch } from "@lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "@components/authForm/signIn/SignIn";
import { SignUp } from "@components/authForm/signUp/SignUp";
import {
  selectIsLogOut,
  selectIsPasswordRecoveryEmail,
  selectIsPasswordRecoveryPassword,
  selectIsSignIn,
  selectIsSignUp,
  selectIsValidateOTP,
} from "@lib/redux/toggleModal/selectors";
import { LogOut } from "@components/authForm/logOut/LogOut";
import { PasswordRecoveryEmail } from "@components/authForm/passwordRecovery/PasswordRecoveryEmail";
import { PasswordRecoveryPassword } from "@components/authForm/passwordRecovery/PasswordRecoveryPassword";
import { ValidateOTP } from "@components/authForm/validateForm/validateOTP";
const useAppDispatch: () => AppDispatch = useDispatch;

const Footer = () => {
  const dispatch = useAppDispatch();
  const isSignIn = useSelector(selectIsSignIn);
  const isSignUp = useSelector(selectIsSignUp);
  const isLogOut = useSelector(selectIsLogOut);
  const isPasswordRecoveryEmail = useSelector(selectIsPasswordRecoveryEmail);
  const isPasswordRecoveryPassword = useSelector(
    selectIsPasswordRecoveryPassword,
  );
  const isValidateOTP = useSelector(selectIsValidateOTP);

  return (
    <footer>
      <div className="xl2:max-w-[90rem] xl2:px-18 xl2:py-3.5 mx-auto flex w-full flex-wrap items-center justify-between gap-16 py-6">
        <Button onClick={() => dispatch(openModal("isSignIn"))}>Log In</Button>
        <Button onClick={() => dispatch(openModal("isValidateOTP"))}>
          Log Out
        </Button>
        <Button onClick={() => dispatch(openModal("isSignUp"))}>
          Register
        </Button>
      </div>
      {isSignIn && <SignIn />}
      {isLogOut && <LogOut />}
      {isSignUp && <SignUp />}
      {isPasswordRecoveryEmail && <PasswordRecoveryEmail />}
      {isPasswordRecoveryPassword && <PasswordRecoveryPassword />}
      {isValidateOTP && <ValidateOTP />}
    </footer>
  );
};

export default Footer;
