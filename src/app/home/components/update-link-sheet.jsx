import { IconButton } from "@/components/custom/buttons/icon-button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HiOutlinePencil } from "react-icons/hi2";
import { UpdateLinkForm } from "./update-link-form";

export const UpdateLinkSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <IconButton Icon={HiOutlinePencil} />
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetTitle className="mb-3">
            Update Link
        </SheetTitle>
        <SheetDescription>
            <UpdateLinkForm />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
