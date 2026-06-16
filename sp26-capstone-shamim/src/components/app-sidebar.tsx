import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// داده‌های نمونه برای منو
const items = [{ title: "Dashboard", url: "#", icon: null }];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarGroupLabel className="text-black text-2xl">
          Digital shelf
        </SidebarGroupLabel>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex ">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  className="justify-center  bg-black text-white"
                  key={item.title}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-primary  border-gray-200 border-2 w-50 py-3 px-0.5 mb-5 mx-auto rounded-xl">
        <div className="flex w-full max-w-sm flex-col gap-4 ">
          <h1>storge used</h1>
          <Progress value={50} className="bg-black" />
          <p className="text-gray-400">6.8 GB of 10 GB</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
