/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HiArrowDownTray, HiOutlineClipboardDocument, HiQrCode } from "react-icons/hi2";
import { useGetQrCode } from "@/hooks/useGetQrCode";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const QrButton = ({ customUrl }) => {
  const { isLoading, qrSrc } = useGetQrCode(customUrl);

  const copyImageToClipboard = async () => {
    try {
      const response = await fetch(qrSrc);
      const blob = await response.blob();
      const item = new ClipboardItem({ "image/png": blob });
      await navigator.clipboard.write([item]);
      toast.success("Image copied to clipboard.");
    } catch (error) {
      console.error("Failed to copy image: ", error);
      toast.error("Failed to copy image.");
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = qrSrc;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="border rounded-md p-2 hover:bg-slate-100 transition-colors duration-150">
          <HiQrCode size={20} />
        </div>
      </DrawerTrigger>
      <DrawerContent
        side="bottom"
        aria-describedby={undefined}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DrawerHeader>
          <VisuallyHidden>
            <DrawerTitle></DrawerTitle>
          </VisuallyHidden>
          <DrawerClose />
        </DrawerHeader>
        <DrawerDescription>
          <Image
            alt="QR Code"
            height={320}
            width={320}
            src={qrSrc}
            className="mx-auto"
            loading="lazy"
          />
        </DrawerDescription>
        <DrawerFooter>
          <Button
            variant="secondary"
            className="flex justify-between items-center"
            onClick={downloadImage}
          >
            Download
            <HiArrowDownTray size={20} />
          </Button>

          <Button
            variant="secondary"
            className="flex justify-between items-center"
            onClick={copyImageToClipboard}
          >
            Copy
            <HiOutlineClipboardDocument size={20} />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
