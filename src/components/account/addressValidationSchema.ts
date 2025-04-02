import { object, ObjectSchema, string } from "yup";

import { IAddressFormData } from "./AddressChangeForm";

export const AddressSchema: ObjectSchema<IAddressFormData> = object().shape({
  area: string().required("Обов'язкове поле"),
  city: string().required("Обов'язкове поле"),
  street: string().required("Обов'язкове поле"),
  number: string().required("Обов'язкове поле"),
});
