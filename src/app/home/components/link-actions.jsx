"use client";
import { IconButton } from "@/components/custom/buttons/icon-button";
import { RenameLinkButton } from "./rename-link-button";
import { DeleteButton } from "@/components/custom/buttons/delete-button";
import { HiOutlinePencil, HiOutlineShare, HiQrCode } from "react-icons/hi2";
import { useDeleteLink } from "@/hooks/link/useDeleteLink";
import { useSession } from "next-auth/react";
import { Sheet } from "@/components/ui/sheet";
import { UpdateLinkSheet } from "./update-link-sheet";

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
        <IconButton Icon={HiQrCode} />

        {/* Button to edit the link */}
        <UpdateLinkSheet/>

        {/* Button to share the link */}
        <IconButton
          buttonClassName={
            "text-app-accent border-app-accent hover:bg-app-accent/10 hover:text-app-accent"
          }
          isLink={true}
          href={`${link.url}`}
          Icon={HiOutlineShare}
        />
      </div>

      {/* Button to delete the link */}
      <DeleteButton handleOnClick={() => handleDeleteClick(link.id)} />
    </div>
  );
};
