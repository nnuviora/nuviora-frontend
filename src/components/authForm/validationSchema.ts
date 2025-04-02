import { boolean, object, ObjectSchema, ref, string } from "yup";
import { ISingInForm, ISingUpForm } from "@/types";

export const SignUpSchema: ObjectSchema<ISingUpForm> = object().shape({
  email: string().email("Недійсний email").required("Email обов’язковий"),
  password: string()
    .min(6, "Мінімум 6 символів")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Пароль повинен містити велику та малу літеру",
    )
    .required("Необхідно ввести пароль"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Паролі мають збігатися")
    .required("Потрібне підтвердження пароля"),
  isTermsAccepted: boolean()
    .oneOf([true], "Ви повинні прийняти умови")
    .required(),
});

export const SignInSchema: ObjectSchema<ISingInForm> = object().shape({
  email: string().email("Недійсний email").required("Email обов’язковий"),
  password: string()
    .min(6, "Мінімум 6 символів")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Пароль повинен містити велику та малу літеру",
    )
    .required("Необхідно ввести пароль"),
});
