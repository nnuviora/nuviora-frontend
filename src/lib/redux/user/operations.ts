import { fetchProfileApi } from "@/api/profileApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IUser } from "../types";

const handleApiError = (err: unknown, defaultMessage: string) => {
  const error = err as AxiosError<{ message?: string }>;
  if (!error.response) return "Network error. Please try again.";
  const { status, data } = error.response;
  const messages: Record<number, string> = {
    400: "Bad request",
    401: "Unauthorized. Please log in again.",
    405: "Method Not Allowed",
    422: "Validation error",
    429: "Too Many Requests. Please wait before retrying.",
  };
  return messages[status] || data?.message || defaultMessage;
};

export const fetchProfile = createAsyncThunk<
  IUser,
  void,
  {
    rejectValue: string;
  }
>("user/profile", async (_, { rejectWithValue }) => {
  try {
    const response = await fetchProfileApi();
    return response.data;
  } catch (err) {
    // const err = error as AxiosError<IErrorResponse>;
    //
    // const message =
    //   err.response?.data?.detail?.[0]?.msg || "Не вдалося отримати профіль";
    return rejectWithValue(handleApiError(err, "Не вдалося отримати профіль"));
  }
});
