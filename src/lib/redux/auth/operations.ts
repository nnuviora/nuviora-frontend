import {} from // registerUserApi,
// loginUserApi,
// logoutApi,
// refreshAccessTokenApi,
// resendValidationCodeApi,
// validateRegistrationEmailApi,
// api,
// requestRecoveryPasswordApi,
// verifyEmailApi,
// changePasswordApi,
// fetchGoogleAuthApi,
// fetchGoogleCallbackApi,
"@/api/authApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {} from // IGoogleCallback,
// IGoogleResponse,
// ILoginCredentials,
// IRegisterCredentials,
// IRegistrationResponse,
"../types";
import { refreshAccessTokenApi } from "@/api/tanstackReactQuery/auth/requests";
// import { IPasswordRecoveryCredentials } from "@/types";

const handleApiError = (err: unknown, defaultMessage: string) => {
  const error = err as AxiosError<{ message?: string }>;

  if (!error.response) return "Network error. Please try again.";
  const { status } = error.response;
  const messages: Record<number, string> = {
    400: "Невірний пароль або Email",
    401: "Unauthorized. Please log in again.",
    405: "Method Not Allowed",
    409: "Email вже зареестрований",
    422: "Validation error",
    429: "Too Many Requests. Please wait before retrying.",
  };
  return messages[status] || defaultMessage;
};

// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async (userData: IRegisterCredentials, { rejectWithValue }) => {
//     try {
//       const response = await registerUserApi(userData);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(handleApiError(err, "Помилка реєстрації"));
//     }
//   },
// );

// export const logInUser = createAsyncThunk(
//   "auth/login",
//   async (userData: ILoginCredentials, { rejectWithValue }) => {
//     try {
//       const response = await loginUserApi(userData);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(handleApiError(err, "Помилка входу"));
//     }
//   },
// );

// export const validateRegistrationEmail = createAsyncThunk(
//   "auth/validateEmail",
//   async (otpCode: string, { rejectWithValue }) => {
//     try {
//       const response = await validateRegistrationEmailApi(otpCode);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(handleApiError(err, "Validation failed"));
//     }
//   },
// );

// export const resendValidationCode = createAsyncThunk(
//   "auth/resendCode",
//   async (id: string, { rejectWithValue }) => {
//     try {
//       const response = await resendValidationCodeApi(id);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(handleApiError(err, "Validation failed"));
//     }
//   },
// );

export const refreshAccessToken = createAsyncThunk(
  "auth/refresh",

  async (_, { rejectWithValue }) => {
    try {
      const response = await refreshAccessTokenApi();
      return response.data;
    } catch (err) {
      return rejectWithValue(handleApiError(err, "Token refresh failed"));
    }
  },
);

// export const logOut = createAsyncThunk(
//   "auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       await logoutApi();
//       delete api.defaults.headers.common["Authorization"];
//     } catch (err) {
//       return rejectWithValue(handleApiError(err, "Помилка виходу"));
//     }
//   },
// );

// export const recoveryPassword = createAsyncThunk<
//   IRegistrationResponse,
//   { email: string },
//   { rejectValue: string }
// >("auth/recoveryPassword", async ({ email }, { rejectWithValue }) => {
//   try {
//     const response = await requestRecoveryPasswordApi({ email });
//     return response.data;
//   } catch (err) {
//     return rejectWithValue(
//       handleApiError(err, "Відновлення паролю не вдалося"),
//     );
//   }
// });

// export const verifyEmail = createAsyncThunk<
//   string,
//   string,
//   { rejectValue: string }
// >("auth/verifyEmail", async (otpCode, { rejectWithValue }) => {
//   try {
//     const response = await verifyEmailApi(otpCode);

//     return response.data;
//   } catch (err) {
//     return rejectWithValue(handleApiError(err, "Validation failed"));
//   }
// });

// export const changePassword = createAsyncThunk<
//   void,
//   IPasswordRecoveryCredentials,
//   { rejectValue: string }
// >("auth/changePassword", async (data, { rejectWithValue }) => {
//   try {
//     await changePasswordApi(data);
//   } catch (err) {
//     return rejectWithValue(handleApiError(err, "Validation failed"));
//   }
// });

// export const fetchGoogleAuth = createAsyncThunk<
//   IGoogleResponse,
//   void,
//   { rejectValue: string }
// >("auth/fetchGoogleAuth", async (_, { rejectWithValue }) => {
//   try {
//     const response = await fetchGoogleAuthApi();
//     return response.data;
//   } catch (err) {
//     return rejectWithValue(handleApiError(err, "Validation failed"));
//   }
// });

// export const fetchGoogleCallback = createAsyncThunk<
//   IGoogleCallback,
//   string,
//   { rejectValue: string }
// >("auth/fetchGoogleCallback", async (code: string, { rejectWithValue }) => {
//   try {
//     const response = await fetchGoogleCallbackApi(code);
//     return response.data;
//   } catch (err) {
//     return rejectWithValue(handleApiError(err, "Validation failed"));
//   }
// });
