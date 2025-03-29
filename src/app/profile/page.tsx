import { ProfileTabs } from "@/components/sidebar-components/ProfileTabs";
import React from "react";

const ProfilePage = ({}) => {
  return (
    <section className="xl2:h-[calc(100vh-104px-40px)] flex h-[calc(100vh-84px-20px)] w-full flex-col gap-6 rounded-4xl bg-[var(--bg-disabled)] p-6">
      Профіль / Зміна паролю
      <ProfileTabs />
    </section>
  );
};

export default ProfilePage;
