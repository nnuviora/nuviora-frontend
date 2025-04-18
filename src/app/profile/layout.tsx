"use client";

import { ReactNode, Suspense } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

import AppSidebar from "@/components/layouts/Sidebar";
import withAuth from "@/hoc/withAuth";
import Loader from "@/app/loader";

function AccountLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="relative flex h-full w-full">
      <SidebarProvider>
        <AppSidebar />

        <div className="xl2:ml-6 scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-100 w-full flex-1 overflow-hidden overflow-y-auto pr-[5px] outline-none md:ml-5 md:rounded-2xl">
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default withAuth(AccountLayout);
