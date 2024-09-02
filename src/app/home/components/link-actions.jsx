"use client";
import { IconButton } from "@/components/custom/buttons/icon-button";
import { DeleteButton } from "@/components/custom/buttons/delete-button";
import { HiChartBar, HiOutlineShare } from "react-icons/hi2";
import { useDeleteLink } from "@/hooks/link/useDeleteLink";
import { useSession } from "next-auth/react";
import { UpdateLinkButton } from "./update-link-button";
import { QrButton } from "./qr-button";
import { routes } from "@/constants/routes";

export const LinkActions = ({ link }) => {
  const { callDeleteLinkMutation, deleteLinkIsPending } = useDeleteLink();
  const { data: session } = useSession();

  const handleDeleteClick = async (linkId) => {
    if (deleteLinkIsPending) return;

    if (!session) return;

    const response = await callDeleteLinkMutation({
      userId: session.user.id,
      linkId,
    });

    if (response.error) {
      return;
    }
  };

  return (
    <div className="gap-2 justify-between flex items-center w-full">
      <div className="flex justify-start items-center gap-2">
        {/* Button to generate QR code */}
        <QrButton customUrl={link.customUrl} />

        {/* Button to edit the link */}
        <UpdateLinkButton
          linkCustomUrl={link.customUrl}
          linkUrl={link.url}
          linkId={link.id}
        />

        <IconButton
          buttonClassName={
            "border p-2 rounded-md"
          }
          href={`${link.customUrl}/${routes.analitycs}`}
          Icon={HiChartBar}
        />

        {/* Button to share the link */}
        <IconButton
          buttonClassName={
            "text-app-accent border-app-accent hover:bg-app-accent/10 hover:text-app-accent"
          }
          href={`${link.customUrl}`}
          Icon={HiOutlineShare}
        />

      </div>

      {/* Button to delete the link */}
      <DeleteButton handleOnClick={() => handleDeleteClick(link.id)} />
    </div>
  );
};
