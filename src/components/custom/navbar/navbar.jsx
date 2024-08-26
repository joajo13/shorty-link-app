"use client";
import { HiBars2 } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavbarBrand } from "./navbar-brand";
import { RootTabs } from "./root-tabs";
import React from "react";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg z-50">
      {/* Navbar */}
      <div className="flex items-center justify-between flex-wrap px-4 py-4 w-full">
        <Sheet>
          {/* Brand */}
          <NavbarBrand />

          <div className="flex items-center">
            {
              // If the user is not logged in, do not show the avatar
              session && (
                <Avatar className="mr-2 w-8 h-8">
                  <AvatarImage src={session.user.image} />
                  <AvatarFallback>{session.user.name.substring(1, 1)}</AvatarFallback>
                </Avatar>
              )
            }
            {/* <Avatar className="mr-2"
            >
              <AvatarImage src="https://api.dicebear.com/9.x/pixel-art/svg" className="h-10"/>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar> */}

            {/* Menu button */}
            <SheetTrigger className="">
              <HiBars2 className="text-primary text-2xl" />
            </SheetTrigger>
          </div>

          {/* Menu content */}
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Tabs */}
      <RootTabs />
    </nav>
  );
};
