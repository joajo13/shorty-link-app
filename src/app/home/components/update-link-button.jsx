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
import { HiOutlinePencil } from "react-icons/hi2";
import { UpdateLinkForm } from "./update-link-form";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";

export const UpdateLinkButton = ({ linkUrl, linkCustomUrl, linkId }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button
          variant="outline"
          size="icon"
        >
          <HiOutlinePencil size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        side="bottom"
        className="p-2"
        aria-describedby={undefined}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DrawerHeader>
          <VisuallyHidden>
            <DrawerTitle className="mb-3">Update Link</DrawerTitle>
          </VisuallyHidden>
          <DrawerClose />
        </DrawerHeader>
        <UpdateLinkForm
          customUrl={linkCustomUrl}
          url={linkUrl}
          linkId={linkId}
        />
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
