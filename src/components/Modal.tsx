"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose(): void;
};

export default function Modal({ children, isOpen, onClose }: Props) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative focus:outline-none z-[50]"
        onClose={onClose}
      >
        <div className="fixed inset-0  w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/20 z-[9999] backdrop-blur-xs">
            <DialogPanel
              transition
              className="flex flex-col items-center justify-center w-fit  rounded-xl  duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
