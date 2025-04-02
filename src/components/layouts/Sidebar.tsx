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
  LifeBuoy,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import items from "../../../data/sidebar-items.json";
import itemsFooter from "../../../data/sidebar-items-footer.json";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/lib/redux/hooks";
import { openModal } from "@/lib/redux/toggleModal/slice";

const iconMap: { [key: string]: React.ComponentType } = {
  User,
  Scale,
  ShoppingCart,
  PiggyBank,
  Mail,
  Heart,
};
const iconMapFooter: { [key: string]: React.ComponentType } = {
  LifeBuoy,
  LogOut,
};

const AppSidebar = () => {
  const dispatch = useAppDispatch();
  const { state, isMobile } = useSidebar();
  const handleClick = () => {
    dispatch(openModal("isLogOut"));
  };
  return (
    <Sidebar
      variant="floating"
      collapsible={isMobile ? "offcanvas" : "icon"}
      className={cn(
        "xl2:h-[calc(100vh-116px-40px)] xl2:w-(--sidebar-width) h-[calc(100vh-88px-99px)] w-full group-data-[collapsible=icon]:items-center group-data-[variant=floating]:rounded-2xl md:w-[280px] lg:h-[calc(100vh-88px-24px)]",
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
            "size-32 transition-all duration-200 ease-in-out group-data-[collapsible=icon]:size-6",
          )}
        >
          <AvatarImage src="https://github.com/shadcn.png" />

          <AvatarFallback>ПІ</AvatarFallback>
        </Avatar>
        {state === "expanded" && (
          <p className="category-text text-[var(--black)] transition-all duration-200 ease-linear">
            Тарас Шевченко
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
                    <SidebarMenuButton asChild>
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
                      {item.url ? (
                        <a href={item.url}>
                          <IconComponentFooter />
                          <span>{item.title}</span>
                        </a>
                      ) : (
                        <button onClick={handleClick}>
                          <IconComponentFooter />
                          <span>{item.title}</span>
                        </button>
                      )}
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
