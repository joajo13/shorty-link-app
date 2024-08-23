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
import { NavbarBrand } from "./navbar-brand";
import { RootTabs } from "./root-tabs";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg">
      {/* Navbar */}
      <div className="flex items-center justify-between flex-wrap px-4 py-4 w-full">
        <Sheet>
          {/* Brand */}
          <NavbarBrand />

          {/* Menu button */}
          <SheetTrigger className="">
            <HiBars2 className="text-primary text-2xl" />
          </SheetTrigger>

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
