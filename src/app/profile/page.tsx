"use client";

import { useRouter } from "next/navigation";
import { ProfileTabs } from "@/components/sidebar-components/ProfileTabs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  SidebarTrigger,
} from "@/components/ui";
import { ArrowLeft, Menu } from "lucide-react";
import React from "react";

const ProfilePage = ({}) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <section className="flex min-h-full w-full flex-col gap-6 md:bg-[var(--bg-disabled)] md:p-6">
      <p className="mb-8 hidden md:block">Профіль / Зміна паролю</p>
      <nav className="mb-6 flex justify-between md:hidden">
        <ArrowLeft color="#BDBCDB" onClick={handleBack} />
        <SidebarTrigger className="size-6 p-0">
          <Menu color="#BDBCDB" className="size-6" />
        </SidebarTrigger>
      </nav>
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <Avatar className="size-32 bg-[#eef0fd]">
          <AvatarImage src="https://github.com/shadcn.png" />

          <AvatarFallback>ІП</AvatarFallback>
        </Avatar>

        <p className="body-text text-[var(--text-black)]">Тарас Шевченко</p>
      </div>
      <ProfileTabs />
    </section>
  );
};

export default ProfilePage;
