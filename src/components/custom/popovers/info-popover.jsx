import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

export function InfoPopover() {
  return (
    <Popover>
      <PopoverTrigger className="p-2">
        <HiOutlineExclamationCircle className="text-app-accent" size={22} />
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-2 bg-background text-sm text-gray-600">
          <p>
            Customizing your link will make it easier to remember and share.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
