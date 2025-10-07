"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { ReactNode, Ref } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose(): void;
  ref?: Ref<HTMLElement> | undefined;
};

export default function Modal({ children, isOpen, onClose, ref }: Props) {
  return (
    <>
      <Dialog
        ref={ref}
        open={isOpen}
        as="div"
        className=" focus:outline-none z-[50] flex fixed inset-0 overflow-auto min-h-full items-center justify-center p-4 bg-black/20 backdrop-blur-xs"
        onClose={onClose}
      >
        <DialogPanel
          transition
          className="flex flex-col items-center justify-center w-fit  rounded-xl  duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
        >
          {children}
        </DialogPanel>
      </Dialog>
    </>
  );
}
