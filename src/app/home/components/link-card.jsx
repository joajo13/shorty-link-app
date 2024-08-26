/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HiOutlinePencil,
  HiOutlineShare,
  HiQrCode,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { RenameLinkButton } from "./rename-link-button";
import { IconButton } from "../../../components/custom/buttons/icon-button";
import { DeleteButton } from "@/components/custom/buttons/delete-button";

// Main component to display a link card
export const LinkCard = ({ link }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        {/* Component to display link information */}
        <LinkInfo
          customLink={link.customUrl}
          originalLink={link.url}
          faviconSrc={link.faviconUrl}
        />

        {/* Open link button */}
        <IconButton
          Icon={HiArrowTopRightOnSquare}
          buttonClassName={"rounded-full"}
        />
      </CardHeader>

      <CardFooter>
        {/* Component to display action buttons */}
        <LinkActions />
      </CardFooter>
    </Card>
  );
};

// Component to display link information
const LinkInfo = ({ faviconSrc, customLink, originalLink }) => {
  return (
    <div className="flex justify-start items-center gap-5">
      <img src={faviconSrc} alt="favicon" className="w-6 h-6 rounded-md" />

      <div className="flex flex-col gap-2">
        <CardTitle>{customLink}</CardTitle>
        <CardDescription>{originalLink}</CardDescription>
      </div>
    </div>
  );
};

// Component to display action buttons
const LinkActions = () => {
  return (
    <div className="gap-2 justify-between flex items-center w-full">
      <div className="flex justify-start items-center gap-2">
        {/* Button to rename the link */}
        <RenameLinkButton />

        {/* Button to generate QR code */}
        <IconButton Icon={HiQrCode} />

        {/* Button to edit the link */}
        <IconButton Icon={HiOutlinePencil} />

        {/* Button to share the link */}
        <IconButton
          buttonClassName={
            "text-app-accent border-app-accent hover:bg-app-accent/10 hover:text-app-accent"
          }
          Icon={HiOutlineShare}
        />
      </div>

      {/* Button to delete the link */}
      <DeleteButton />
    </div>
  );
};
