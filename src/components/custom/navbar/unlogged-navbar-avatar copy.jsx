import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { HiMiniUser, HiArrowRightEndOnRectangle } from "react-icons/hi2";

export const UnloggedNavbarAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-8 h-8 flex justify-center items-center">
          <AvatarFallback>
            <HiMiniUser className="text-primary" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-1">
        <DropdownMenuItem className="p-0">
          <Button className="w-full justify-between px-2" variant="ghost" asChild>
            <Link href="/account">
              Sign in
              <HiArrowRightEndOnRectangle />
            </Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
