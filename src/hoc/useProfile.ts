import { useQuery } from "@tanstack/react-query";
import { fetchProfileApi } from "@/api/profileApi";

export const useProfile = (isAuthenticated: boolean) => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfileApi,
    enabled: isAuthenticated,
    staleTime: 60 * 1000,
    gcTime: 3 * 60 * 1000,
  });
};
