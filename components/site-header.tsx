"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Moon, Search } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { Input } from "./ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { pages } from "@/data/pages";
import Link from "next/link";

export function SiteHeader() {
  const pathname = usePathname();
  const page = pages.find((page) => page.url === pathname);

  return (
    <header className="h-16.25 border-b w-full flex justify-between items-center px-5 py-2">
      <div className="flex flex-col ">
        <h2 className="font-bold text-sm">{page?.title}</h2>
        <p className="text-xs">{page?.description}</p>
      </div>
      <div className="flex items-center gap-7">
        <InputGroup className="min-w-xs">
          <InputGroupInput placeholder="Buscar pedidos, clientes..." />{" "}
          {/* ⌘ K ou ctrl K* // borda azul */}
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <div className="flex items-center gap-3 ">
          <ModeToggle />
          <Link href="/notifications">
            <Bell className="size-5"/>
          </Link>
          <Avatar className="size-5" />
        </div>
      </div>
    </header>
  );
}
