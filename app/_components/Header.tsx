"use client";

import {
  INFO_MODAL_TYPE_KEY,
  InfoModalType,
} from "@/components/info-modal.utils";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NavItem, navItems } from "../landing.utils";

export default function Header() {
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);

  function openInfoModal(type: InfoModalType) {
    const urlSearchParams = new URLSearchParams();

    urlSearchParams.set(INFO_MODAL_TYPE_KEY, type);
    router.push(`?${urlSearchParams.toString()}`);
  }

  const [selectedNavItem, setSelectedNavItem] = useState<NavItem | null>(null);
  const [displayedNavItem, setDisplayedNavItem] = useState<NavItem | null>(
    null,
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleOnNavItemClick(item: NavItem) {
    if (item.subItems == undefined) {
      router.push(item.href ?? "/");
      setIsMobileMenuOpen(false);
      return;
    }

    setDisplayedNavItem(item);
    setSelectedNavItem((selected) => (selected === item ? null : item));
  }

  useEffect(() => {
    if (selectedNavItem) return;

    const timeoutId = window.setTimeout(() => setDisplayedNavItem(null), 300);
    return () => window.clearTimeout(timeoutId);
  }, [selectedNavItem]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectedNavItem &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setSelectedNavItem(null);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [selectedNavItem]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 z-50 w-full px-3 py-3 transition-all duration-300 sm:px-6 sm:py-4 lg:px-16 lg:py-6",
      )}
    >
      <nav
        className={cn(
          "bg-white/75 p-4 rounded-4xl flex flex-col backdrop-blur-sm transition-colors duration-300",
          {
            "bg-white": Boolean(selectedNavItem),
          },
        )}
      >
        <section className="flex items-center justify-between gap-3">
          <Logo />

          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
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

          <div className="hidden gap-4 lg:flex">
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

          <button
            type="button"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/10 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </section>

        {isMobileMenuOpen && (
          <section
            id="mobile-navigation"
            className="mt-3 border-t border-border/70 pt-3 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex min-h-11 w-full items-center justify-between rounded-lg px-3 text-left"
                    aria-expanded={selectedNavItem === item}
                    onClick={() => handleOnNavItemClick(item)}
                  >
                    {item.label}
                    {item.subItems && (
                      <span aria-hidden="true">
                        {selectedNavItem === item ? "−" : "+"}
                      </span>
                    )}
                  </button>
                  {selectedNavItem === item && item.subItems && (
                    <ul className="mb-2 ml-3 flex flex-col border-l border-border/70 pl-3">
                      {item.href && (
                        <li>
                          <Link
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted/70"
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label} overview
                          </Link>
                        </li>
                      )}
                      {item.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                            href={subItem.href ?? "/"}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openInfoModal(InfoModalType.GetInvolved);
                  }}
                  className="min-h-11 rounded-full px-3 text-xs uppercase"
                >
                  Get Involved
                </Button>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openInfoModal(InfoModalType.SupportUs);
                  }}
                  className="min-h-11 rounded-full px-3 text-xs uppercase"
                >
                  Support us
                </Button>
              </div>
            </nav>
          </section>
        )}

        <section
          className={cn(
            "hidden mx-auto w-full max-w-3xl transition-[grid-template-rows] duration-300 ease-in-out lg:grid",
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
