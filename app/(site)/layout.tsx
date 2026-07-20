import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1">
          <SiteHeader />
          <main>{children}</main>
        </div>
      </SidebarProvider>
    </>
  );
}
