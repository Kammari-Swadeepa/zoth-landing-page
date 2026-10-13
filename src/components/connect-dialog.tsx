"use client";

import type { ReactNode } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ConnectDialogProps = {
  service: "Wallet" | "Sonar";
  children: ReactNode;
  className: string;
  onOpen?: () => void;
};

export default function ConnectDialog({
  service,
  children,
  className,
  onOpen,
}: ConnectDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" onClick={onOpen} className={className}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="border border-[#492014] bg-[#090504] text-[#f5f3f2]">
        <DialogHeader>
          <DialogTitle className="text-base font-medium">
            Connect {service}
          </DialogTitle>
          <DialogDescription className="text-[#a49a95]">
            {service} connection is not available in this demo yet.
          </DialogDescription>
        </DialogHeader>
        <div className="border border-[#35180f] bg-[#070403] p-4 text-xs leading-5 text-[#a49a95]">
          You can continue exploring the sale details without connecting.
        </div>
        <DialogFooter className="border-[#35180f] bg-[#100806]">
          <DialogClose
            onClick={() =>
              toast.info(`Continuing without connecting ${service.toLowerCase()}.`)
            }
            className="zoth-orange-button inline-flex h-9 items-center justify-center px-4 text-xs font-medium"
          >
            Continue without connecting
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
