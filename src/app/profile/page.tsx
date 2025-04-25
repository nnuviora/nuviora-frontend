import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/api/tanstackReactQuery/getQueryClient";
import { fetchProfileApi } from "@/api/tanstackReactQuery/profile/requests";
import ProfilePageClient from "@/components/ProfilePageClient";

export default async function ProfilePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["profile"],
    queryFn: fetchProfileApi,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ProfilePageClient />
    </HydrationBoundary>
  );
}
