import { api } from "@/api/authApi";
import store, { RootState } from "@lib/redux/store";

import {
  logoutApi,
  refreshAccessTokenApi,
} from "@/api/tanstackReactQuery/auth/requests";
import { addAuthenticated, removeAuthenticated } from "@lib/redux/auth/slice";

export const setupTokenInterceptor = (getState: () => RootState) => {
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      const isAuthenticated = getState().auth.isAuthenticated;
      if (!isAuthenticated) return Promise.reject(error);
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const response = await refreshAccessTokenApi();
          const newAccessToken = response.data.access_token;
          localStorage.setItem("accessToken", newAccessToken);
          store.dispatch(addAuthenticated());
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (err) {
          try {
            await logoutApi();
          } catch (error) {
            console.log(error);
          }
          localStorage.removeItem("accessToken");
          store.dispatch(removeAuthenticated());
          return Promise.reject(err);
        }
      }

      if (error.response?.status === 410) {
        try {
          await logoutApi();
        } catch (error) {
          console.log(error);
        }
        localStorage.removeItem("accessToken");
        store.dispatch(removeAuthenticated());
        return Promise.reject(error);
      }

      return Promise.reject(error);
    },
  );
};
