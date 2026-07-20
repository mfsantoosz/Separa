"use client";

import * as React from "react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import { NavTertiary } from "@/components/sidebar/nav-tertiary";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import { Warehouse } from "lucide-react";
import { pages } from "@/data/pages";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const isExpanded = state === "expanded";

  const user = {
    name: "Maria",
    email: "maria@email.com",
    avatar: "/avatars/maria.png",
  };

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
        <NavMain items={pages.filter((page) => page.group === "main")} />
        <hr />
        <NavSecondary
          items={pages.filter((page) => page.group === "secondary")}
        />

        <NavTertiary
          items={pages.filter((page) => page.group === "tertiary")}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={user}
          items={pages.filter((page) => page.group === "user")}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
