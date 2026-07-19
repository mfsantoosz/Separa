import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SidebarProvider className="bg-sidebar text-sidebar-foreground">
        <AppSidebar />
        <main className="relative z-10 flex-1">
        {children}
      </main>
      </SidebarProvider>
    </>
  )
}