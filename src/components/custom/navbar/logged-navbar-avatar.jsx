import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { HiArrowLeftStartOnRectangle, HiMiniUser } from "react-icons/hi2";

export const LoggedNavbarAvatar = ({ session }) => {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-8 h-8">
          <AvatarImage src={session.user.image} />
          <AvatarFallback>{session.user.name.substring(1, 1)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-1 w-[10rem]">
        <DropdownMenuItem className="p-0">
          <Button
            className="w-full justify-between items-center px-2"
            variant="ghost"
            onClick={handleSignOut}
          >
            Log out
            <HiArrowLeftStartOnRectangle className="text-destructive"/>
          </Button>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-0">
          <Button className="w-full justify-between px-2" variant="ghost" asChild>
            <Link href="/account">
              Account
              <HiMiniUser />
            </Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
