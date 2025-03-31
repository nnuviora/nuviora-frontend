import { Iregister, registerUserApi } from "@/api/authApi";
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
          return rejectWithValue("Email is already taken");
        case 422:
          return rejectWithValue("Validation error");
        default:
          return rejectWithValue(error.response?.data || "Registration failed");
      }
    }
  },
);
