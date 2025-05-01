// const handleApiError = (err: unknown, defaultMessage: string) => {
//   const error = err as AxiosError<{ message?: string }>;
//
//   if (!error.response) return "Network error. Please try again.";
//   const { status } = error.response;
//   const messages: Record<number, string> = {
//     400: "Невірний пароль або Email",
//     401: "Unauthorized. Please log in again.",
//     405: "Method Not Allowed",
//     409: "Email вже зареестрований",
//     422: "Validation error",
//     429: "Too Many Requests. Please wait before retrying.",
//   };
//   return messages[status] || defaultMessage;
// };
