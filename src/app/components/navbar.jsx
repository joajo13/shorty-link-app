"use client";
import { HiOutlineMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-background px-2 py-4">
        <Button variant="primary" onClick={toggleAside}>
          <HiOutlineMenu />
        </Button>
      </nav>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-background backdrop:blur-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isAsideOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-primary text-2xl font-semibold">
            Shorty
            <span className="text-app-accent">Link</span>
          </h1>
          <Button variant="primary" onClick={toggleAside}>
            <HiXMark />
          </Button>
        </div>
      </aside>
np
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40 transform transition-all duration-300 ease-in-out ${
          isAsideOpen ? "block" : "hidden"
        }`}
        onClick={toggleAside}
        ></div>
    </>
  );
};
