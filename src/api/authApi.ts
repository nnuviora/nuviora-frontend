import axios from "axios";
import { API_BASE_URL } from "@/api/axios/apiUrl";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
