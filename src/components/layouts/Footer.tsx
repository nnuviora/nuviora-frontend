"use client";
import { Button } from "@components/ui";
import { openModal } from "@lib/redux/toggleModal/slice";
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
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

const Footer = () => {
  const dispatch = useAppDispatch();
  const isSignIn = useAppSelector(selectIsSignIn);
  const isSignUp = useAppSelector(selectIsSignUp);
  const IsLogOut = useAppSelector(selectIsLogOut);
  const isPasswordRecoveryEmail = useAppSelector(selectIsPasswordRecoveryEmail);
  const isPasswordRecoveryPassword = useAppSelector(
    selectIsPasswordRecoveryPassword,
  );
  const isValidateOTP = useAppSelector(selectIsValidateOTP);
  return (
    <footer>
      <div className="xl2:max-w-[90rem] xl2:px-18 xl2:py-3.5 mx-auto flex w-full flex-wrap items-center justify-between gap-16 py-6">
        <Button onClick={() => dispatch(openModal("isSignIn"))}>Log In</Button>
        <Button onClick={() => dispatch(openModal("isLogOut"))}>Log Out</Button>
        <Button onClick={() => dispatch(openModal("isSignUp"))}>
          Register
        </Button>
      </div>
      {isSignIn && <SignIn />}
      {IsLogOut && <LogOut />}
      {isSignUp && <SignUp />}
      {isPasswordRecoveryEmail && <PasswordRecoveryEmail />}
      {isPasswordRecoveryPassword && <PasswordRecoveryPassword />}
      {isValidateOTP && <ValidateOTP />}
    </footer>
  );
};

export default Footer;
