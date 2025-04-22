"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  User,
  Scale,
  ShoppingCart,
  PiggyBank,
  Mail,
  Heart,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import items from "../../../data/sidebar-items.json";
import itemsFooter from "../../../data/sidebar-items-footer.json";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { openModal } from "@/lib/redux/toggleModal/slice";
import { usePathname } from "next/navigation";
import { selectUser } from "@/lib/redux/user/selectors";
import { selectIsAuthenticated } from "@lib/redux/auth/selectors";
import { useProfile } from "@/hoc/useProfile";

const iconMap: { [key: string]: React.ComponentType } = {
  User,
  Scale,
  ShoppingCart,
  PiggyBank,
  Mail,
  Heart,
};
const iconMapFooter: { [key: string]: React.ComponentType } = {
  LogOut,
};

const AppSidebar = () => {
  const dispatch = useAppDispatch();
  const { state, isMobile } = useSidebar();
  const pathname = usePathname();
  // const user = useAppSelector(selectUser) || null;
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { data: profile, isLoading, error } = useProfile(isAuthenticated);
  if (!profile) return;
  const user = profile.data;
  const first_name = user?.first_name?.trim();
  const last_name = user?.last_name?.trim();
  const email = user?.email?.trim();

  let usernameInitials = "";

  if (first_name && last_name) {
    usernameInitials = `${first_name[0].toUpperCase()}${last_name[0].toUpperCase()}`;
  } else if (first_name) {
    usernameInitials = first_name[0].toUpperCase();
  } else if (last_name) {
    usernameInitials = last_name[0].toUpperCase();
  } else if (email) {
    usernameInitials = email[0].toUpperCase();
  } else {
    return;
  }

  const fullName =
    first_name && last_name
      ? `${first_name} ${last_name}`
      : first_name
        ? first_name
        : last_name
          ? last_name
          : "Гість";
  const handleClick = () => {
    dispatch(openModal("isLogOut"));
  };
  return (
    <Sidebar
      variant="floating"
      collapsible={isMobile ? "offcanvas" : "icon"}
      className={cn(
        "xl2:h-[calc(100vh-129px-24px)] xl2:w-(--sidebar-width) h-[calc(100vh-116px-91px)] w-full group-data-[collapsible=icon]:items-center group-data-[variant=floating]:rounded-2xl md:w-[280px]",
      )}
    >
      <SidebarHeader className="mb-6">
        {isMobile ? (
          <SidebarTrigger className="mb-5 ml-auto">
            <PanelLeftClose className="size-6 self-end" color="#BDBCDB" />
          </SidebarTrigger>
        ) : state === "collapsed" ? (
          <SidebarTrigger className="mb-5 ml-auto">
            <PanelLeftOpen className="size-6" color="#BDBCDB" />
          </SidebarTrigger>
        ) : (
          <SidebarTrigger className="mb-5 ml-auto">
            <PanelLeftClose className="size-6 self-end" color="#BDBCDB" />
          </SidebarTrigger>
        )}

        <Avatar
          className={cn(
            "size-32 transition-all duration-200 ease-in-out group-data-[collapsible=icon]:size-14",
          )}
          isEdit={state !== "collapsed"}
        >
          <AvatarImage src="https://github.com/shadcn.png" />

          <AvatarFallback>{usernameInitials}</AvatarFallback>
        </Avatar>
        {state === "expanded" && (
          <p className="category-text text-[var(--black)] transition-all duration-200 ease-linear">
            {fullName}
          </p>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0">
              {items.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === `/${item.url}`}
                    >
                      <a href={item.url}>
                        <IconComponent />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0">
              {itemsFooter.map((item) => {
                const IconComponentFooter = iconMapFooter[item.icon];
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <button onClick={handleClick}>
                        <IconComponentFooter />
                        <span>{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
