import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import AppSidebar from "@/components/layouts/Sidebar";

export default function AccountLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="relative flex h-full">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="flex h-screen flex-1 flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </SidebarProvider>
    </section>
  );
}
