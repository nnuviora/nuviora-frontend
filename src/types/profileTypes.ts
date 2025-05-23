export interface IProfileFormData {
  first_name: string;
  last_name: string;
  email: string;
  about?: string;
}

export interface IPasswordFormData {
  current_password: string;
  new_password: string;
  confirm_new_password: string;
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

export interface IModalState {
  isSignIn: boolean;
  isLogOut: boolean;
  isSignUp: boolean;
  isUserProfile: boolean;
  isPasswordRecoveryEmail: boolean;
  isPasswordRecoveryPassword: boolean;
  isValidateOTP: boolean;
  isVerifyOTP: boolean;
  isMenuOpen: boolean;
}
