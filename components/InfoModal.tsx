"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { INFO_MODAL_TYPE_KEY, InfoModalType } from "./info-modal.utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const infoModalTypeToTitle = new Map<InfoModalType, string>([
  [InfoModalType.GetInvolved, "Get Involved"],
  [InfoModalType.SupportUs, "Support Us"],
]);

const infoModalTypeToDescription = new Map<InfoModalType, string>([
  [InfoModalType.SupportUs, "Contact us through info@cai.or.ke"],
  [
    InfoModalType.GetInvolved,
    "Individuals and organizations can actively participate in CAI’s work through volunteering, partnerships, and community engagement",
  ],
]);
export default function InfoModal() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const infoModalType = searchParams.get(
    INFO_MODAL_TYPE_KEY,
  ) as InfoModalType | null;

  const isOpen = Boolean(infoModalType);

  const title = infoModalType ? infoModalTypeToTitle.get(infoModalType) : "";
  const description = infoModalType
    ? infoModalTypeToDescription.get(infoModalType)
    : "";

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          router.replace("/");
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
