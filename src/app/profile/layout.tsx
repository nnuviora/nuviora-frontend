"use client";

import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

import AppSidebar from "@/components/layouts/Sidebar";
import withAuth from "@/hoc/withAuth";

function AccountLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="relative flex h-full w-full">
      <SidebarProvider>
        <AppSidebar />

        <div className="xl2:ml-6 w-full flex-1 overflow-hidden overflow-y-auto md:ml-5 md:rounded-2xl">
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}

export default withAuth(AccountLayout);
