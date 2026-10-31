"use client";

import {
  INFO_MODAL_TYPE_KEY,
  InfoModalType,
} from "@/components/info-modal.utils";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NavItem, navItems } from "../landing.utils";

export default function Header() {
  const router = useRouter();

  function openInfoModal(type: InfoModalType) {
    const urlSearchParams = new URLSearchParams();

    urlSearchParams.set(INFO_MODAL_TYPE_KEY, type);
    router.push(`?${urlSearchParams.toString()}`);
  }

  const [selectedNavItem, setSelectedNavItem] = useState<NavItem | null>(null);
  const [displayedNavItem, setDisplayedNavItem] = useState<NavItem | null>(
    null,
  );

  function handleOnNavItemClick(item: NavItem) {
    if (item.subItems == undefined) {
      router.push(item.href ?? "/");
      return;
    }

    setDisplayedNavItem(item);
    setSelectedNavItem(item);
  }

  useEffect(() => {
    if (selectedNavItem) return;

    const timeoutId = window.setTimeout(() => setDisplayedNavItem(null), 300);
    return () => window.clearTimeout(timeoutId);
  }, [selectedNavItem]);

  useEffect(() => {
    function handleClickOutside() {
      if (selectedNavItem) setSelectedNavItem(null);
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  });

  const isInHomePage = location.pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full p-6 transition-all duration-300 h-fit",
      )}
    >
      <nav className="bg-background p-4 rounded-4xl flex flex-col">
        <section className=" flex justify-between items-center">
          <Logo />

          <div className=" flex items-center gap-6 ">
            {navItems.map((item) => (
              <button
                className="cursor-pointer"
                onClick={() => handleOnNavItemClick(item)}
                key={item.label}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => openInfoModal(InfoModalType.GetInvolved)}
              className="px-6 py-6 text-xs uppercase rounded-full"
            >
              Get Involved
            </Button>
            <Button
              onClick={() => openInfoModal(InfoModalType.SupportUs)}
              className="px-6 py-6 text-xs uppercase rounded-full "
            >
              Support us
            </Button>
          </div>
        </section>

        <section
          className={cn(
            "grid w-2/3 mx-auto transition-[grid-template-rows] duration-300 ease-in-out",
            selectedNavItem ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            {displayedNavItem && (
              <div
                className={cn(
                  "w-full border-t border-border/70 px-2 py-4 transition-opacity duration-200 sm:px-8 lg:px-16 xl:px-24",
                  selectedNavItem ? "opacity-100" : "opacity-0",
                )}
              >
                {displayedNavItem.href && (
                  <Link
                    className="mb-3 block text-lg font-semibold hover:underline"
                    href={displayedNavItem.href}
                  >
                    {displayedNavItem.label}
                  </Link>
                )}
                <ul className="flex flex-col gap-1">
                  {displayedNavItem.subItems?.map((subItem) => (
                    <li key={subItem.label}>
                      <Link
                        className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        href={subItem.href ?? ""}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </nav>
    </header>
  );
}
