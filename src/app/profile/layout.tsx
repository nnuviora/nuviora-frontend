"use client";

import { ReactNode } from "react";
import {
  SidebarHeader,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import AppSidebar from "@/components/layouts/Sidebar";
import withAuth from "@/hoc/withAuth";

function AccountLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="xl2:h-[calc(100vh-104px-40px)] relative flex h-[calc(100vh-84px-20px)]">
      <SidebarProvider>
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <div className="ml-6 flex-1">
            <SidebarHeader className="flex w-full flex-col items-start">
              <SidebarSeparator />
            </SidebarHeader>
            {children}
          </div>
        </div>
      </SidebarProvider>
    </section>
  );
}

export default withAuth(AccountLayout);
