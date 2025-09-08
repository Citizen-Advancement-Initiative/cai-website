"use client";

import NavBarItem from "@/components/NavBarItem";
import { ArrowLongRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { NavItem, navItems } from "../landing.utils";

export default function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState<NavItem | null>(null);

  return (
    <nav className="flex flex-col items-center h-full">
      <ul className="flex gap-8 ">
        {navItems.map((navItem) => (
          <NavBarItem
            setActiveNavItem={setActiveNavItem}
            key={navItem.label}
            navItem={navItem}
            uppercase
          />
        ))}
      </ul>

      {/* // sub items */}
      {activeNavItem && (
        <div className="absolute top-full mx-auto mt-2 inset-x-0 bg-black/50 z-10 h-fit rounded-2xl py-6 px-12 w-[90%]">
          <div className="flex items-center justify-between mb-6">
            <Link
              href={activeNavItem?.href || ""}
              className="font-medium text-3xl capitalize flex items-center gap-2"
            >
              {activeNavItem?.label} <ArrowLongRightIcon className="size-8" />
            </Link>

            <button onClick={()=>setActiveNavItem(null)} className="cursor-pointer">
              <XMarkIcon className="size-8" />
            </button>
          </div>

          <ul className="grid grid-cols-3 gap-6">
            {activeNavItem?.subItems?.map((navItem) => (
              <NavBarItem
                setActiveNavItem={setActiveNavItem}
                key={navItem.label}
                navItem={navItem}
                className="font-medium text-lg capitalize"
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
