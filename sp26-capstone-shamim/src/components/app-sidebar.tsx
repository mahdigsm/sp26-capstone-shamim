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
      <SidebarHeader className="h-15.5 flex flex-row items-center justify-start px-4 border-b overflow-hidden">
        <div className="flex items-center gap-3 shrink-0">
          <div className="size-9 bg-black text-white rounded-sm flex items-center justify-center shrink-0">
            <ShoppingBag className="size-4" />
          </div>
          {!isCollapsed && (
            <span className="text-base whitespace-nowrap transition-all duration-300 rounded-xs font-semibold">
              Digitalshelf
            </span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 py-4">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className="h-9 data-[active=true]:bg-black data-[active=true]:text-white font-bold"
              >
                <a
                  href={item.url}
                  className="flex-1 px-2 py-4 space-y-0.5 bg-black text-white rounded-[0.5rem]! text-sm"
                >
                  <item.icon className="size-5" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
     <SidebarFooter className="border-t border-sidebar-border p-3 group-data-[collapsible=icon]:hidden">
  <div className="rounded-lg border border-sidebar-border bg-background/60 p-3">
    <div className="mb-2 flex items-center gap-2">
      <Package className="text-graytext" />
      <span className="text-xs font-semibold text-black">
        Storage Used
      </span>
    </div>

    <div className="mb-2 w-full rounded-full bg-Secondary h-1.5">
      <div
        className="h-1.5 rounded-full bg-black transition-all duration-500"
        style={{ width: "68%" }}
      />
    </div>

    <p className="text-xs text-graytext font-medium">
      6.8 GB of 10 GB
    </p>
  </div>
</SidebarFooter>
    </Sidebar>
  );
}
