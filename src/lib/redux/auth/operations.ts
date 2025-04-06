import {
  loginUserApi,
  logoutApi,
  registerUserApi,
  resendValidationCodeApi,
  validateRegistrationEmailApi,
} from "@/api/authApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ILoginCredentials, IRegisterCredentials } from "../types";

const handleApiError = (err: unknown, defaultMessage: string) => {
  const error = err as AxiosError<{ message?: string }>;

  if (!error.response) {
    return "Network error. Please try again.";
  }

  const { status, data } = error.response;

  const errorMessages: Record<number, string> = {
    400: "Bad request",
    401: "Unauthorized. Please log in again.",
    405: "Method Not Allowed",
    409: "Email уже зарегистрирован",
    422: "Validation error",
    429: "Too Many Requests. Please wait before retrying.",
  };

  return errorMessages[status] || data?.message || defaultMessage;
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: IRegisterCredentials, { rejectWithValue }) => {
    try {
      const response = await registerUserApi(userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(handleApiError(err, "Registration failed"));
    }
  },
);

export const logInUser = createAsyncThunk(
  "auth/login",
  async (userData: ILoginCredentials, { rejectWithValue }) => {
    try {
      const response = await loginUserApi(userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(handleApiError(err, "Registration failed"));
    }
  },
);

export const validateRegistrationEmail = createAsyncThunk(
  "auth/validateEmail",
  async (otpCode: string, { rejectWithValue }) => {
    try {
      const response = await validateRegistrationEmailApi(otpCode);
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(handleApiError(err, "Validation failed"));
    }
  },
);

export const resendValidationCode = createAsyncThunk(
  "auth/resendCode",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await resendValidationCodeApi(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(handleApiError(err, "Validation failed"));
    }
  },
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logoutApi();
    } catch (err) {
      return rejectWithValue(handleApiError(err, "Logout failed"));
    }
  },
);
