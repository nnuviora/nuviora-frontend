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
    <section className="xl2:h-[calc(100vh-104px-40px)] relative flex h-[calc(100vh-84px-20px)] w-full">
      <SidebarProvider>
        <AppSidebar />

        <div className="ml-6 flex w-full flex-1 flex-col items-center justify-center overflow-y-auto">
          <div className="w-full flex-1">{children}</div>
        </div>
      </SidebarProvider>
    </section>
  );
}

export default withAuth(AccountLayout);
