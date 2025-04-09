import { api } from "@/api/authApi";
import store, { RootState } from "@/lib/redux/store";
import { refreshAccessToken, logOut } from "@/lib/redux/auth/operations";
import Router from "next/router";

export const setupTokenInterceptor = (getState: () => RootState) => {
  api.interceptors.request.use((config) => {
    const token = getState().auth.accessToken;
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
      if (!isAuthenticated) return;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const response = await store.dispatch(refreshAccessToken()).unwrap();

          localStorage.setItem("accessToken", response.access_token);
          originalRequest.headers.Authorization = `Bearer ${response.access_token}`;
          return api(originalRequest);
        } catch (err) {
          store.dispatch(logOut());
          Router.push("/login");
          return Promise.reject(err);
        }
      }

      if (error.response?.status === 410) {
        store.dispatch(logOut());
        Router.push("/login");
        return Promise.reject(error);
      }

      return Promise.reject(error);
    },
  );
};
