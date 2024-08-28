/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { LinkActions } from "./link-actions";
import { LinkInfo } from "./link-info";
import { IconLinkButton } from "@/components/custom/buttons/icon-link-button";
import { useSession } from "next-auth/react";

const LinkCard = ({ link }) => {
  const {data: session} = useSession();

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row justify-between items-center">
        {/* Component to display link information */}
        <LinkInfo
          customLink={link.customUrl}
          originalLink={link.url}
          faviconSrc={link.faviconUrl}
        />

        {/* Open link button */}
        <IconLinkButton
          Icon={HiArrowTopRightOnSquare}
          buttonClassName={"rounded-full p-2 border border-gray-200 hover:bg-gray-100 trasition-colors duration-200"}
          href={link.url}
        />
      </CardHeader>

      <CardFooter>
        {/* Component to display action buttons */}
        {
          session && session.user.id === link.userId && (
            <LinkActions
              link={link}
            />
          )
        }
      </CardFooter>
    </Card>
  );
};

export default LinkCard;
