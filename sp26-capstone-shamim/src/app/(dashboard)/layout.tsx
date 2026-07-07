import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <AppSidebar />

        <SidebarInset className="bg-primary">
          <header className="sticky top-0 z-50 bg-primary border-b">
            <Navbar />
          </header>
          <Toaster />
          <main className="bg-primary p-6">{children}</main>
        </SidebarInset>
      </TooltipProvider>
    </SidebarProvider>
  );
}
