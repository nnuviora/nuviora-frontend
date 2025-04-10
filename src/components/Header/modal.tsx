import { SignIn } from "@components/authForm/signIn/SignIn";
import { LogOut } from "@components/authForm/logOut/LogOut";
import { SignUp } from "@components/authForm/signUp/SignUp";
import { PasswordRecoveryEmail } from "@components/authForm/passwordRecovery/PasswordRecoveryEmail";
import { PasswordRecoveryPassword } from "@components/authForm/passwordRecovery/PasswordRecoveryPassword";
import { useAppSelector } from "@lib/redux/hooks";
import {
  selectIsLogOut,
  selectIsPasswordRecoveryEmail,
  selectIsPasswordRecoveryPassword,
  selectIsSignIn,
  selectIsSignUp,
} from "@lib/redux/toggleModal/selectors";

export default function Modal() {
  const isSignIn = useAppSelector(selectIsSignIn);
  const isSignUp = useAppSelector(selectIsSignUp);
  const isLogOut = useAppSelector(selectIsLogOut);
  const isPasswordRecoveryEmail = useAppSelector(selectIsPasswordRecoveryEmail);
  const isPasswordRecoveryPassword = useAppSelector(
    selectIsPasswordRecoveryPassword,
  );
  return (
    <>
      {isSignIn && <SignIn />}
      {isLogOut && <LogOut />}
      {isSignUp && <SignUp />}
      {isPasswordRecoveryEmail && <PasswordRecoveryEmail />}
      {isPasswordRecoveryPassword && <PasswordRecoveryPassword />}
    </>
  );
}
