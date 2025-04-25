import { cache } from "react";
import { QueryClient } from "@tanstack/react-query";

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          staleTime: 1 * 60 * 1000,
          gcTime: 3 * 60 * 1000,
          refetchOnWindowFocus: true,
        },
        mutations: {
          retry: 0,
        },
      },
    }),
) as () => QueryClient;
export default getQueryClient;
