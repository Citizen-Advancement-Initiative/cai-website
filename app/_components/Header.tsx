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

  function handleOnNavItemClick(item: NavItem) {
    if (item.subItems == undefined) {
      router.push(item.href ?? "/");
      return;
    }

    setSelectedNavItem(item);
  }

  useEffect(() => {
    function handleClickOutside() {
      if (selectedNavItem) setSelectedNavItem(null);
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  });

  return (
    <header
      className={cn(
        "fixed z-50 inset-x-0 top-0 flex items-center  gap-6 p-6 m-4 mx-6 rounded-full backdrop-blur-md bg-white/80 text-foreground",
        { "rounded-4xl items-start": Boolean(selectedNavItem) },
      )}
    >
      <Logo />

      <nav className="flex flex-col items-center  font-medium grow">
        <div className="flex items-center gap-12 justify-center">
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

        {selectedNavItem && (
          <div className="px-24 py-4 w-full">
            {selectedNavItem.href && (
              <Link
                className="block mb-4 text-xl font-medium hover:underline"
                href={selectedNavItem.href}
              >
                {selectedNavItem.label}
              </Link>
            )}

            <ul className="flex flex-col gap-4">
              {selectedNavItem.subItems?.map((subItem) => (
                <li key={subItem.label}>
                  <Link className="hover:underline" href={subItem.href ?? ""}>
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="flex items-center gap-4">
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
    </header>
  );
}
