"use client";

import { ReactNode } from "react";
import {
  SidebarHeader,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import AppSidebar from "@/components/layouts/Sidebar";
import withAuth from "@/hoc/withAuth";

function AccountLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="relative flex h-full">
      <SidebarProvider>
        <AppSidebar />

        <div className="flex h-screen flex-1 flex-col">
          <div className="ml-6 flex-1">
            <SidebarHeader className="flex flex-col items-start">
              <SidebarTrigger />
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
