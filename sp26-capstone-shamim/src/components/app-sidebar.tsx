"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { LayoutDashboard, ShoppingBag, Package } from "lucide-react";
const items = [{ title: "Dashboard", url: "#", icon: LayoutDashboard }];
export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <Sidebar
      className="bg-Section border-r"
      collapsible="icon"
      variant="sidebar"
    >
      <div className="absolute -right-3 top-20 z-50">
        <SidebarTrigger className="size-9 rounded-full border bg-background shadow-md" />
      </div>
      <SidebarHeader className="h-16 flex flex-row items-center justify-start px-4 border-b overflow-hidden">
        <div className="flex items-center gap-3 shrink-0">
          <div className="size-9 bg-black text-white rounded-lg flex items-center justify-center shrink-0">
            <ShoppingBag className="size-5" />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-xl whitespace-nowrap transition-all duration-300">
              Digital shelf
            </span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className="h-11 data-[active=true]:bg-black data-[active=true]:text-white"
              >
                <a
                  href={item.url}
                  className="flex items-center gap-3 bg-black text-white rounded-lg text-sm"
                >
                  <item.icon className="size-5" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-3">
        <div className="bg-background/60 rounded-lg p-3 border border-sidebar-border">
          <div className="items-center mb-4">
            <Package />
            <span className="text-xs font-medium text-black ">
              Storage Used
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-1.5 mb-1.5">
            <div className="bg-black h-1.5 rounded-full transition-all duration-500"></div>
            <p className="text-sm text-graytext uppercase font-medium mt-0.5">
              6.8 GB of 10 GB
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
