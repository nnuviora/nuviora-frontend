import {
  Iregister,
  registerUserApi,
  validateRegistrationEmailApi,
} from "@/api/authApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: Iregister, { rejectWithValue }) => {
    try {
      const response = await registerUserApi(userData);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      switch (error.response?.status) {
        case 400:
          return rejectWithValue("Passwords do not match");
        case 409:
          return rejectWithValue("Email уще зарегистрирован");
        case 422:
          return rejectWithValue("Validation error");
        default:
          return rejectWithValue(error.response?.data || "Registration failed");
      }
    }
  },
);

export const validateRegistrationEmail = createAsyncThunk(
  "auth/validateEmail",
  async (otpCode: string, { rejectWithValue }) => {
    try {
      const response = await validateRegistrationEmailApi(otpCode);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      switch (error.response?.status) {
        case 400:
          return rejectWithValue("Email verification token has expired");
        case 405:
          return rejectWithValue("Metod Not Allow");
        case 422:
          return rejectWithValue("Validation error");
        default:
          return rejectWithValue(error.response?.data || "Validation failed");
      }
    }
  },
);
