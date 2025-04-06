import { fetchProfileApi } from "@/api/profileApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IErrorResponse, IUser } from "../types";
import { RootState } from "../store";

export const fetchProfile = createAsyncThunk<
  IUser,
  void,
  {
    rejectValue: string;
    state: RootState;
  }
>("user/profile", async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const token = state.auth.accessToken;
    if (!token) return;
    const response = await fetchProfileApi(token);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<IErrorResponse>;
    const message =
      err.response?.data?.detail?.[0]?.msg || "Не вдалося отримати профіль";
    return rejectWithValue(message);
  }
});
