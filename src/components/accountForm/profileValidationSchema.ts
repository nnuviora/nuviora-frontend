import { object, ObjectSchema, ref, string } from "yup";
import {
  IAddressFormData,
  IPasswordFormData,
  IProfileFormData,
} from "@/types/profileTypes";

export const ProfileSchema: ObjectSchema<IProfileFormData> = object().shape({
  first_name: string()
    .required("Обов'язкове поле")
    .max(12, "Максимальна довжина — 12 символів"),
  last_name: string()
    .required("Обов'язкове поле")
    .max(12, "Максимальна довжина — 12 символів"),
  email: string().email("Некоректний email").required("Обов'язкове поле"),
  about: string().max(100, "Максимальна довжина — 100 символів"),
});

export const PasswordSchema: ObjectSchema<IPasswordFormData> = object().shape({
  current_password: string()
    .min(6, "Мінімум 6 символів")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Пароль повинен містити велику та малу літеру",
    )
    .required("Необхідно ввести старий пароль"),
  new_password: string()
    .min(6, "Мінімум 6 символів")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Пароль повинен містити велику та малу літеру",
    )
    .notOneOf(
      [ref("current_password")],
      "Новий пароль не повинен співпадати зі старим",
    )
    .required("Необхідно ввести новий пароль"),
  confirm_new_password: string()
    .oneOf([ref("new_password")], "Паролі мають збігатися")
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
