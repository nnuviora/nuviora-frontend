import { object, ObjectSchema, ref, string } from "yup";
import {
  IAddressFormData,
  IPasswordFormData,
  IProfileFormData,
} from "@/types/profileTypes";

export const ProfileSchema: ObjectSchema<IProfileFormData> = object().shape({
  first_name: string().required("Обов'язкове поле"),
  last_name: string().required("Обов'язкове поле"),
  email: string().email("Некоректний email").required("Обов'язкове поле"),
  username: string().max(500, "Максимальна довжина — 500 символів"),
});

export const PasswordSchema: ObjectSchema<IPasswordFormData> = object().shape({
  oldPassword: string()
    .min(6, "Мінімум 6 символів")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Пароль повинен містити велику та малу літеру",
    )
    .required("Необхідно ввести старий пароль"),
  newPassword: string()
    .min(6, "Мінімум 6 символів")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Пароль повинен містити велику та малу літеру",
    )
    .notOneOf(
      [ref("oldPassword")],
      "Новий пароль не повинен співпадати зі старим",
    )
    .required("Необхідно ввести новий пароль"),
  newPasswordRepeat: string()
    .oneOf([ref("newPassword")], "Паролі мають збігатися")
    .required("Потрібне підтвердження пароля"),
});

export const AddressSchema: ObjectSchema<IAddressFormData> = object().shape({
  country: string().required("Обов'язкове поле"),
  area: string().required("Обов'язкове поле"),
  district: string().required("Обов'язкове поле"),
  city: string().required("Обов'язкове поле"),
  street: string().required("Обов'язкове поле"),
  houseNumber: string().required("Обов'язкове поле"),
  apartmentNumber: string(),
});
