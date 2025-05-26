import { SignIn } from "@components/authForm/signIn/SignIn";
import { LogOut } from "@components/authForm/logOut/LogOut";
import { SignUp } from "@components/authForm/signUp/SignUp";
import { PasswordRecoveryEmail } from "@components/authForm/passwordRecovery/PasswordRecoveryEmail";
import { PasswordRecoveryPassword } from "@components/authForm/passwordRecovery/PasswordRecoveryPassword";
import { useAppSelector } from "@lib/redux/hooks";
import {
  selectIsLogOut,
  selectIsMenuOpen,
  selectIsPasswordRecoveryEmail,
  selectIsPasswordRecoveryPassword,
  selectIsSignIn,
  selectIsSignUp,
  selectIsValidateOTP,
  selectIsVerifyOTP,
} from "@lib/redux/toggleModal/selectors";
import { Menu } from "../sidebar-components/Menu";
import { ValidateOTP } from "../authForm/validateForm/validateOTP";
import { VerifyOTP } from "../authForm/passwordRecovery/verifyOTP";

export default function Modal() {
  const isSignIn = useAppSelector(selectIsSignIn);
  const isSignUp = useAppSelector(selectIsSignUp);
  const isLogOut = useAppSelector(selectIsLogOut);
  const isPasswordRecoveryEmail = useAppSelector(selectIsPasswordRecoveryEmail);
  const isPasswordRecoveryPassword = useAppSelector(
    selectIsPasswordRecoveryPassword,
  );
  const isMenuOpen = useAppSelector(selectIsMenuOpen);
  const isValidateOTP = useAppSelector(selectIsValidateOTP);
  const isVerifyOTP = useAppSelector(selectIsVerifyOTP);

  return (
    <>
      {isSignIn && <SignIn />}
      {isLogOut && <LogOut />}
      {isSignUp && <SignUp />}
      {isPasswordRecoveryEmail && <PasswordRecoveryEmail />}
      {isPasswordRecoveryPassword && <PasswordRecoveryPassword />}
      {isMenuOpen && <Menu />}
      {isValidateOTP && <ValidateOTP />}
      {isVerifyOTP && <VerifyOTP />}
    </>
  );
}
