"use client";
import { useRouter } from "next/navigation";
import { Button, SearchInput } from "@components/ui";
import { ShoppingCart, UserPlus, UserMinus } from "lucide-react";
import { selectLogIn } from "@lib/redux/logIn/selectors";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "@components/authForm/signIn/SignIn";
import { LogOut } from "@components/authForm/logOut/LogOut";
import { SignUp } from "@components/authForm/signUp/SignUp";
import { PasswordRecoveryEmail } from "@components/authForm/passwordRecovery/PasswordRecoveryEmail";
import { PasswordRecoveryPassword } from "@components/authForm/passwordRecovery/PasswordRecoveryPassword";
import {
  selectIsLogOut,
  selectIsPasswordRecoveryEmail,
  selectIsPasswordRecoveryPassword,
  selectIsSignIn,
  selectIsSignUp,
} from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { openModal } from "@lib/redux/toggleModal/slice";
import { useDeviceType } from "@/hooks";
import Link from "next/link";

const useAppDispatch: () => AppDispatch = useDispatch;

export function Header() {
  const deviceType = useDeviceType();
  const router = useRouter();
  const isLogIn = useSelector(selectLogIn);
  const dispatch = useAppDispatch();
  const isSignIn = useSelector(selectIsSignIn);
  const isSignUp = useSelector(selectIsSignUp);
  const isLogOut = useSelector(selectIsLogOut);
  const isPasswordRecoveryEmail = useSelector(selectIsPasswordRecoveryEmail);
  const isPasswordRecoveryPassword = useSelector(
    selectIsPasswordRecoveryPassword,
  );

  function handleUser() {
    if (isLogIn) {
      router.push("/profile");
    } else {
      dispatch(openModal("isSignIn"));
    }
  }

  return (
    <header className="w-full bg-[var(--button-primary-default)]">
      <div className="xl2:max-w-[90rem] xl2:px-18 xl2:py-2 mx-auto flex w-full items-center justify-between gap-6 px-4 py-2">
        <Link
          className="h2-text leading-[1.2] text-[var(--text-white)]"
          href={"/"}
        >
          Nuviora
        </Link>
        <SearchInput
          name="headerSearch"
          placeholder="Search..."
          className="leading-[1.2]"
        />
        <Button className="p-1 leading-[1.2]" onClick={handleUser}>
          <div className="flex items-center justify-between gap-3">
            {isLogIn ? <UserPlus size={36} /> : <UserMinus size={36} />}
          </div>
        </Button>

        {deviceType === "desktop" && (
          <Button className="p-1">
            <ShoppingCart size={36} />
          </Button>
        )}
        {isSignIn && <SignIn />}
        {isLogOut && <LogOut />}
        {isSignUp && <SignUp />}
        {isPasswordRecoveryEmail && <PasswordRecoveryEmail />}
        {isPasswordRecoveryPassword && <PasswordRecoveryPassword />}
      </div>
    </header>
  );
}

export default Header;
