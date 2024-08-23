/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HiArrowTopRightOnSquare,
  HiOutlineShare,
  HiQrCode,
} from "react-icons/hi2";

export const LinkCard = ({ link }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex justify-start items-center gap-5">
          <img
            src={link.favicon}
            alt="favicon"
            className="w-6 h-6 rounded-md"
          />

          <div className="flex flex-col gap-2">
            <CardTitle>{link.customLink}</CardTitle>
            <CardDescription>{link.originalLink}</CardDescription>
          </div>
        </div>

        <Button variant="outline" size="icon" className="mt-0 rounded-full">
          <HiArrowTopRightOnSquare size={20} />
        </Button>
      </CardHeader>

      <CardFooter className="gap-2 justify-between">
        <div className="flex justify-start items-center gap-2">
          <Button variant="outline">Rename</Button>

          <Button variant="outline" size="icon">
            <HiQrCode size={20} />
          </Button>

          <Button variant="outline" size="icon" className="border-app-accent">
            <HiOutlineShare size={20} className="text-app-accent"/>
          </Button>
        </div>

        <Button
          variant="ghost"
          className="text-destructive hover:bg-destructive/10 hover:text-destructive"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
