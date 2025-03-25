"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import items from "../../../data/sidebar-items.json";
import { cn } from "@/lib/utils";

const iconMap: { [key: string]: React.ComponentType } = {
  User,
  Scale,
  ShoppingCart,
  PiggyBank,
  Mail,
  Heart,
};

const AppSidebar = () => {
  const isMobile = useIsMobile();
  const { state } = useSidebar();
  return (
    <Sidebar variant="floating" collapsible={isMobile ? "offcanvas" : "icon"}>
      <SidebarContent>
        <Avatar
          className={cn(
            "transition-all duration-200",
            state === "collapsed" ? "h-4 w-4" : "h-32 w-32",
          )}
        >
          <AvatarImage src="https://github.com/shadcn.png" />

          <AvatarFallback>ПІ</AvatarFallback>
        </Avatar>
        <SidebarGroup>
          <SidebarGroupLabel className="justify-center">
            <p className="category-text text-[var(--black)]">Прізвище Імʼя</p>
          </SidebarGroupLabel>
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
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
