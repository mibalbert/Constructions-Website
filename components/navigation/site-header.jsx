/**
 * site-header.jsx
 */

import { NavItems } from "./nav-items";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export async function SiteHeader() {
  return (
    <header>
      <div className="flex justify-between mx-auto lg:gap-0 h-14 max-w-7xl">
        <div className="relative flex items-center w-auto h-full">
          <Link
            href="/"
            className="flex items-center justify-end w-full pl-5 space-x-2"
          >
            <span className="font-bold sm:inline-block whitespace-nowrap">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-end h-full ">
          <NavItems />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
