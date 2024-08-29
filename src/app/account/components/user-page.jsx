/* eslint-disable @next/next/no-img-element */
"use client";
import { PageContainer } from "@/components/custom/container/page-container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { HiArrowLeftStartOnRectangle, HiOutlineTrash } from "react-icons/hi2";

export const UserPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Card className="shadow-none">
        <CardContent className="flex flex-row justify-start gap-4 items-center pt-6">
          <div>
            <img
              src={session.user.image}
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>

          <div>
            <h1 className="text-xl font-semibold">{session.user.name}</h1>
            <p className="text-sm text-gray-500">{session.user.email}</p>
          </div>
        </CardContent>
        <CardFooter 
          className="flex flex-col gap-2 items-start pt-4"
        >
          <Button
            className="w-full justify-between items-center px-2 text-destructive bg-destructive/10 hover:bg-destructive/80 hover:text-secondary"
            variant="secondary"
          >
            Logout
            <HiArrowLeftStartOnRectangle />
          </Button>

          <Button
            className="w-full justify-between items-center px-2 text-destructive bg-destructive/20 hover:bg-destructive/80 hover:text-secondary"
            variant="secondary"
          >
            Delete account
            <HiOutlineTrash />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
