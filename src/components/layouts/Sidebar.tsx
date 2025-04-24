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
import { selectIsAuthenticated } from "@lib/redux/auth/selectors";
import { useProfile } from "@/hoc/useProfile";
import { formatUserName } from "@/utils/formatUserName";

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
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { data: profile, isLoading, error } = useProfile(isAuthenticated);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!profile) return;
  const user = profile.data;

  const { initials, fullName } = formatUserName(user);

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

          <AvatarFallback>{initials}</AvatarFallback>
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
