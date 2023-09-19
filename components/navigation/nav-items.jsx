"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navigationConfig } from "@/config/navigation";

export function NavItems() {
  const pathname = usePathname();

  return (
    <div className="justify-end hidden w-full mr-4 md:flex">
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navigationConfig.topNav.map((el, id) => {
          return (
            <Link
              key={id}
              href={el.href}
              className={cn(
                "hover:text-foreground/80 hover:underline underline-offset-2 transition-all duration-100",
                pathname?.startsWith(el.href)
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {el.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
