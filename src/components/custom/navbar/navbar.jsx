"use client";
import { NavbarBrand } from "./navbar-brand";
import { RootTabs } from "./root-tabs";
import React from "react";
import { useSession } from "next-auth/react";
import { LoggedNavbarAvatar } from "./logged-navbar-avatar";
import { UnloggedNavbarAvatar } from "./unlogged-navbar-avatar copy";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg z-50">
      {/* Navbar */}
      <div className="flex items-center justify-between flex-wrap px-4 py-3 w-full">
        {/* Brand */}
        <NavbarBrand />

        <div className="flex items-center">
          {
            // If the user is not logged in, do not show the avatar
            session ? (
              <LoggedNavbarAvatar session={session} />
            ) : (
              <UnloggedNavbarAvatar />
            )
          }
        </div>
      </div>

      {/* Tabs */}
      <RootTabs />
    </nav>
  );
};
