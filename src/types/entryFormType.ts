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

export interface IPasswordRecoveryPassword {
  password: string;
  passwordConfirm: string;
}
