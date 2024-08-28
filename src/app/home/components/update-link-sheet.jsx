import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlinePencil } from "react-icons/hi2";
import { UpdateLinkForm } from "./update-link-form";

export const UpdateLinkSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="border rounded-md p-2 hover:bg-slate-100 transition-colors duration-150">
          <HiOutlinePencil size={20} />
        </div>
      </SheetTrigger>
      <SheetContent side="bottom" aria-describedby={undefined}>
        <SheetTitle className="mb-3">Update Link</SheetTitle>
        <UpdateLinkForm />
      </SheetContent>
    </Sheet>
  );
};
