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

export const UpdateLinkButton = ({linkUrl, linkCustomUrl, linkId}) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="border rounded-md p-2 hover:bg-slate-100 transition-colors duration-150">
          <HiOutlinePencil size={20} />
        </div>
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
        <DrawerFooter
        >
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
