"use client";
import { Button, Modal } from "@components/ui";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLogIn,
  selectIsLogOut,
  selectIsSignUp,
  selectIsUserProfile,
} from "@lib/redux/toggleModal/selectors";
import { AppDispatch } from "@lib/redux/store";
import DualRangeSliderLabel from "@components/ui/DualRangeSliderLabel";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { RadioButton } from "../ui/radiobutton";

const useAppDispatch: () => AppDispatch = useDispatch;
export function Header() {
  const dispatch = useAppDispatch();
  const isLogIn = useSelector(selectIsLogIn);
  const isSignUp = useSelector(selectIsSignUp);
  const isUserProfile = useSelector(selectIsUserProfile);
  const isLogOut = useSelector(selectIsLogOut);
  const [checkedValue, setCheckedValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (checked: boolean) => {
    setCheckedValue(checked);
  };

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <header>
      <div className="mb-6 flex items-center gap-16 py-6">
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
          <DualRangeSliderLabel />
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
          <div className="mb-2 flex items-center gap-2">
            <Checkbox name="option" onChange={handleChange}>
              Option1
            </Checkbox>
            <Checkbox name="option" onChange={handleChange}>
              Option2
            </Checkbox>
            <Checkbox name="option" onChange={handleChange}>
              Option3
            </Checkbox>
            <Checkbox name="option" onChange={handleChange} disabled>
              Option4
            </Checkbox>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <RadioButton
              name="options"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleRadioChange}
            >
              Option1
            </RadioButton>
            <RadioButton
              name="options"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleRadioChange}
            >
              Option2
            </RadioButton>
            <RadioButton
              name="options"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleRadioChange}
            >
              Option3
            </RadioButton>
            <RadioButton
              name="options"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleRadioChange}
            >
              Option4
            </RadioButton>
          </div>
          <Button onClick={() => dispatch(closeModal("isLogOut"))}>
            Закрыть
          </Button>
        </Modal>
      )}
      {isSignUp && (
        <Modal
          isOpen={isSignUp}
          onClose={() => dispatch(closeModal("isSignUp"))}
        >
          <p>Register</p>
          <Button onClick={() => dispatch(closeModal("isSignUp"))}>
            Закрыть
          </Button>
        </Modal>
      )}
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
