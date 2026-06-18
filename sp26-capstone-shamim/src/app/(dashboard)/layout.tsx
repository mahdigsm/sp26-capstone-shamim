import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-Section">
      <TooltipProvider>
        <AppSidebar />
        <SidebarInset className="bg-primary border-b">
          <Navbar />
          <main className="bg-primary p-6">{children}</main>
        </SidebarInset>
      </TooltipProvider>
    </SidebarProvider>
  );
}
