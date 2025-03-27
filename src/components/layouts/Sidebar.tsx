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
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import items from "../../../data/sidebar-items.json";
import itemsFooter from "../../../data/sidebar-items-footer.json";
import { cn } from "@/lib/utils";
import { openModal } from "@lib/redux/toggleModal/slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@lib/redux/store";

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
const useAppDispatch: () => AppDispatch = useDispatch;
const AppSidebar = () => {
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();
  return (
    <Sidebar
      variant="floating"
      collapsible={isMobile ? "offcanvas" : "icon"}
      className="h-[calc(100vh-116px-40px)]"
    >
      <SidebarHeader className="mb-6">
        <Avatar
          className={cn(
            "size-32 transition-all duration-200 ease-in-out group-data-[collapsible=icon]:size-4",
          )}
        >
          <AvatarImage src="https://github.com/shadcn.png" />

          <AvatarFallback>ПІ</AvatarFallback>
        </Avatar>
        <p className="category-text text-[var(--black)] transition-opacity duration-500 ease-linear group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:duration-200">
          Імʼя Прізвище
        </p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
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
            <SidebarMenu>
              {itemsFooter.map((item) => {
                const IconComponentFooter = iconMapFooter[item.icon];
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        onClick={() => dispatch(openModal("isLogOut"))}
                      >
                        <IconComponentFooter />
                        <span>{item.title}</span>
                      </a>
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
