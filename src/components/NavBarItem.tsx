"use client";

import { NavItem } from "@/app/landing.utils";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type Props = {
  navItem: NavItem;
  setActiveNavItem: Dispatch<SetStateAction<NavItem | null>>;
  uppercase?: boolean;
  className?: string;
};

export default function NavBarItem({
  navItem,
  setActiveNavItem,
  uppercase = false,
  className,
}: Props) {
  return (
    <>
      <li>
        {!navItem.subItems ? (
          <Link
            className={cn(uppercase && "uppercase", className)}
            href={navItem.href || "#"}
          >
            {navItem.label}
          </Link>
        ) : (
          <button
            onClick={() => setActiveNavItem(navItem)}
            className={cn(
              "cursor-pointer",
              uppercase && "uppercase",
              className
            )}
          >
            {navItem.label}
          </button>
        )}
      </li>
    </>
  );
}
