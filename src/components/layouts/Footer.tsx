"use client";

import { Button } from "@components/ui";
import { openModal } from "@lib/redux/toggleModal/slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectIsAuthenticated } from "@/lib/redux/auth/selectors";

const Footer = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <footer>
      <div className="xl2:max-w-[90rem] xl2:px-18 xl2:py-3.5 mx-auto flex w-full flex-wrap items-center justify-between gap-16 py-6">
        {!isAuthenticated && (
          <Button onClick={() => dispatch(openModal("isSignIn"))}>
            Log In
          </Button>
        )}
        {isAuthenticated && (
          <Button onClick={() => dispatch(openModal("isLogOut"))}>
            Log Out
          </Button>
        )}
        {!isAuthenticated && (
          <Button onClick={() => dispatch(openModal("isSignUp"))}>
            Register
          </Button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
