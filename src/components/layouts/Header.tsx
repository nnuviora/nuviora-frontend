"use client";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLogIn,
  selectIsLogOut,
  selectIsSignUp,
  selectIsUserProfile,
} from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import { Modal } from "@components/ui_old";
import { Button } from "@components/ui";
import { SingUp } from "@components/singUp/SingUp";

const useAppDispatch: () => AppDispatch = useDispatch;
export function Header() {
  const dispatch = useAppDispatch();
  const isLogIn = useSelector(selectIsLogIn);
  const isSignUp = useSelector(selectIsSignUp);
  const isUserProfile = useSelector(selectIsUserProfile);
  const isLogOut = useSelector(selectIsLogOut);
  return (
    <header>
      <div className="mb-6 flex flex-wrap items-center gap-16 py-6">
        <Button onClick={() => dispatch(openModal("isLogIn"))}>Log In</Button>
        <Button onClick={() => dispatch(openModal("isLogOut"))}>Log Out</Button>
        <Button onClick={() => dispatch(openModal("isSignUp"))}>
          Register
        </Button>
        <Button onClick={() => dispatch(openModal("isUserProfile"))}>
          User Profile
        </Button>
      </div>
      {isLogIn && (
        <Modal isOpen={isLogIn} onClose={() => dispatch(closeModal("isLogIn"))}>
          <p>Log In</p>
          {/*<DualRangeSliderLabel />*/}
          <Button onClick={() => dispatch(closeModal("isLogIn"))}>
            Закрыть
          </Button>
        </Modal>
      )}
      {isLogOut && (
        <Modal
          isOpen={isLogOut}
          onClose={() => dispatch(closeModal("isLogOut"))}
        >
          <p>Log Out</p>
          <Button onClick={() => dispatch(closeModal("isLogOut"))}>
            Закрыть
          </Button>
        </Modal>
      )}
      {isSignUp && <SingUp />}
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
