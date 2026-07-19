"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavTertiary } from "@/components/nav-tertiary";
import { NavUser } from "@/components/nav-user";
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

import {
  Archive,
  Bell,
  ChartColumn,
  CreditCard,
  Layers,
  LayoutDashboard,
  Package,
  Paintbrush,
  Settings,
  Sparkle,
  Truck,
  UserCircle,
  Users,
  Warehouse,
} from "lucide-react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Painel",
      url: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      title: "Pedidos",
      url: "/orders",
      icon: <Package />,
    },
    {
      title: "Operação",
      url: "/operation",
      icon: <Layers />,
    },
    {
      title: "Entregas",
      url: "/deliveries",
      icon: <Truck />,
    },
    {
      title: "Estoque",
      url: "/inventory",
      icon: <Archive />,
    },
    {
      title: "Clientes",
      url: "/costumers",
      icon: <Users />,
    },
    {
      title: "Análises",
      url: "/analytics",
      icon: <ChartColumn />,
    },
    {
      title: "Assistente IA",
      url: "/assistant",
      icon: <Sparkle />,
    },
  ],

  navSecondary: [
    {
      title: "Notificações",
      url: "/notifications",
      icon: <Bell />,
    },
    {
      title: "Design System",
      url: "/design",
      icon: <Paintbrush />,
    },
  ],
  navTertiary: [
    {
      title: "Configurações",
      url: "/adjustments",
      icon: <Settings />,
    },
  ],
  navUser: [
    {
      title: "Conta",
      url: "/account",
      icon: <UserCircle />
    },
    {
      title: "Billing",
      url: "/billing",
      icon: <CreditCard />
    },
    
  ]
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const isExpanded = state === "expanded";

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div
          className={`group/header flex h-12 items-center px-3 ${
            isExpanded ? "justify-between" : "justify-center px-0"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            {isExpanded ? (
              <div className="bg-sidebar-primary p-2 rounded-xl">
                <Warehouse className="size-4 shrink-0 text-sidebar-primary-foreground " />
              </div>
            ) : (
              // Recolhida: logo e trigger ocupam o mesmo lugar, crossfade no hover
              <div className="relative flex size-8 items-center justify-center">
                <div className="bg-sidebar-primary p-2 rounded-xl group-hover/header:bg-transparent">
                  <Warehouse className="size-4 shrink-0 text-sidebar-primary-foreground transition-opacity duration-200 group-hover/header:opacity-0 " />
                </div>
                <SidebarTrigger className="absolute size-8 opacity-0 transition-opacity duration-200 group-hover/header:opacity-100 group-hover/header:bg-" />
              </div>
            )}

            {isExpanded && (
              <span className="text-base font-semibold whitespace-nowrap">
                Separa
              </span>
            )}
          </div>

          {/* Trigger normal, só quando expandida */}
          {isExpanded && (
            <SidebarTrigger className="group-hover/header:opacity-100" />
          )}
        </div>
      </SidebarHeader>
      <hr />

      <SidebarContent>
        <NavMain items={data.navMain} />
        <hr className="mx-4" />
        <NavSecondary items={data.navSecondary} />
        <NavTertiary items={data.navTertiary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} items={data.navUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
