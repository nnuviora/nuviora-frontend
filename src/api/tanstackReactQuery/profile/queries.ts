import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProfileApi } from "@/api/tanstackReactQuery/profile/requests";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfileApi,
  });
};

export const useInvalidateProfile = () => {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({ queryKey: ["profile"] });
  };
};
