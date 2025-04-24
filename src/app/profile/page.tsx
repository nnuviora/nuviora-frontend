// "use client";

// import { useRouter } from "next/navigation";
// import { ProfileTabs } from "@/components/sidebar-components/ProfileTabs";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
//   SidebarTrigger,
// } from "@/components/ui";
// import { ArrowLeft, PanelLeftOpen } from "lucide-react";
// import React from "react";
// import { Breadcrumbs } from "@/components/accountForm/Breadcrumbs";
// import { useAppSelector } from "@/lib/redux/hooks";

// import { selectIsAuthenticated } from "@lib/redux/auth/selectors";
// import { formatUserName } from "@/lib/utils/formatUserName";
// import { useProfile } from "@/api/tanstackReactQuery/profile/queries";

// const ProfilePage = ({}) => {
//   const router = useRouter();
//   const isAuthenticated = useAppSelector(selectIsAuthenticated);
//   const { data: profile, isLoading, error } = useProfile(isAuthenticated);
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!profile) return;
//   const user = profile.data;

//   const { initials, fullName } = formatUserName(user);

//   const handleBack = () => {
//     router.back();
//   };

//   return (
//     <section className="xl2:h-[calc(100vh-129px-24px)] flex h-[calc(100vh-116px-91px)] min-h-full w-full flex-col md:bg-[var(--bg-disabled)] md:p-6">
//       <p className="subtitle1-text mb-4 hidden md:block">
//         Профіль / Зміна паролю
//       </p>
//       <nav className="mb-6 flex items-center justify-between md:hidden">
//         <ArrowLeft color="#BDBCDB" onClick={handleBack} />
//         <Breadcrumbs className="ml-2 md:hidden" />
//         <SidebarTrigger className="size-6 p-0">
//           <PanelLeftOpen className="size-6" color="#BDBCDB" />
//         </SidebarTrigger>
//       </nav>
//       <div className="mb-4 flex flex-col items-center justify-center gap-4 md:hidden">
//         <Avatar className="size-32 bg-[#eef0fd]">
//           <AvatarImage src="https://github.com/shadcn.png" />

//           <AvatarFallback>{initials}</AvatarFallback>
//         </Avatar>

//         <p className="body-text text-[var(--text-black)]">{fullName}</p>
//       </div>
//       <ProfileTabs />
//     </section>
//   );
// };

// export default ProfilePage;

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/lib/utils/getQueryClient";
import { fetchProfileApi } from "@/api/tanstackReactQuery/profile/requests";
import ProfilePageClient from "@/components/ProfilePageClient";

export default async function ProfilePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["profile"],
    queryFn: fetchProfileApi,
    staleTime: 60 * 1000,
    gcTime: 3 * 60 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ProfilePageClient />
    </HydrationBoundary>
  );
}
