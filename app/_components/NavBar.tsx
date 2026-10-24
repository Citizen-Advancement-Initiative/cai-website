"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { navItems } from "../landing.utils";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <nav className="flex gap-8 items-center h-full">
      {navItems.map((navItem) =>
        navItem.subItems ? (
          <DropdownMenu.Root key={navItem.label}>
            <DropdownMenu.Trigger className="uppercase cursor-pointer">
              {navItem.label}
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                side="bottom"
                align="start"
                className="bg-background/90 px-4 py-6 rounded-xl z-50 shadow-lg"
              >
                <DropdownMenu.Item className="hover:border-none hover:underline" >
                  <Link
                    className="capitalize cursor-pointer text-foreground text-2xl flex items-center gap-4 font-medium"
                    href={navItem.href || "#"}
                  >
                    <span>{navItem.label} </span> <ArrowRightIcon className="size-6"/>
                  </Link>
                </DropdownMenu.Item>

                <div className="grid grid-cols-2 gap-y-8 gap-x-16 mt-8">
                  {navItem.subItems.map((subItem) => (
                    <DropdownMenu.Item className="hover:border-none hover:underline" key={subItem.label}>
                      <Link
                        className="capitalize cursor-pointer text-lg text-foreground "
                        href={subItem.href || "#"}
                      >
                        {subItem.label}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </div>
                <DropdownMenu.Arrow className="fill-background" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        ) : (
          <Link
            key={navItem.label}
            className="uppercase cursor-pointer"
            href={navItem.href || "#"}
          >
            {navItem.label}
          </Link>
        )
      )}
    </nav>
  );
}
