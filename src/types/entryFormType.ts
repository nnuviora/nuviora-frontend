export interface ISingUpForm {
  email: string;
  password: string;
  passwordConfirm: string;
  isTermsAccepted: boolean;
}

export interface ISingInForm {
  email: string;
  password: string;
}

export interface IPasswordRecoveryEmail {
  email: string;
}

export interface IPasswordRecovery {
  password: string;
  repeatPassword: string;
}
export interface IPasswordRecoveryCredentials {
  id: string;
  hash_password: string;
  repeat_password: string;
}
