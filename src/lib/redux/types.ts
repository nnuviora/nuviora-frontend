export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  phone?: string;
  birthDate?: Date | null;
  address: string;
}

export interface IUserState {
  user: IUser | null;
  isEdit: boolean;
  isLoading: boolean;
  error: string | null;
}
export interface IAuthState {
  user: IUser | null;
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
  pendingUserId: string;
  isResend: boolean;
  isAuthenticated: boolean;
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
