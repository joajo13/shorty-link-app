"use client";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export const GoogleButton = ({children}) => {
  const handleOnClick = () => {
    signIn("google", { callbackUrl: "/home" });
  };

  return (
    <Button
      className="w-full text-secondary flex justify-center items-center gap-2 relative"
      onClick={handleOnClick}
    >
      <FaGoogle className="absolute left-4"></FaGoogle>
      {children || "Continue with Google"}
    </Button>
  );
};
