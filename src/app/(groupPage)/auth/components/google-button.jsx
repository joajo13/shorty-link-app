'use client';
import { Button } from "@/components/ui/button"
import { FaGoogle } from "react-icons/fa"
import { signIn } from "next-auth/react"

export const GoogleButton = () => {
    const handleOnClick = () => {
    signIn("google")
    }

  return (
    <Button className="w-full text-secondary flex justify-center items-center gap-2 bg-app-accent hover:bg-app-accent/90 relative"
    onClick={handleOnClick}
    >
        <FaGoogle className="absolute left-4"
        ></FaGoogle>
        Register with Google
    </Button>
  )
}