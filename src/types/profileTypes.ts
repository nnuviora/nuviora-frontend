export interface IProfileFormData {
  firstname: string;
  lastname: string;
  email: string;
  about?: string;
}

export interface IPasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
}

export interface IAddressFormData {
  country: string;
  area: string;
  district: string;
  city: string;
  street: string;
  houseNumber: string;
  apartmentNumber?: string;
}
