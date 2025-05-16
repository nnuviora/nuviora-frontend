export interface IUser {
  first_name?: string | null;
  last_name?: string | null;
  about?: string | null;
  email: string;
  avatar?: string | null;
  phone?: string | null;
  birthDate?: Date | null;
  address: string | null;
}

export interface IUserState {
  user: IUser | null;
  isEdit: boolean;
  isLoading: boolean;
  error: string | null;
}
export interface IAuthState {
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
  isResend: boolean;
  isAuthenticated: boolean;
  id: string;
  url: string;
}

export interface IRegisterCredentials {
  email: string;
  hash_password: string;
  repeat_password: string;
}
export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegistrationResponse {
  message: string;
  id: string;
}
export interface IAuthResponse {
  access_token: string;
  user: IUser;
}

export interface IErrorDetail {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export interface IErrorResponse {
  detail: IErrorDetail[];
}
export interface IGoogleResponse {
  url: string;
}
export interface IGoogleCallback {
  access_token: string;
}
