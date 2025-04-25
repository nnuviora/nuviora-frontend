import { useQuery } from "@tanstack/react-query";
import { fetchProfileApi } from "@/api/tanstackReactQuery/profile/requests";

export const useProfile = (isAuthenticated: boolean) => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfileApi,
    enabled: isAuthenticated,
  });
};
