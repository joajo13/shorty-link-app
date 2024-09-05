"use client";
import { useGetLinksByUserId } from "@//hooks/link/useGetLinksByUserId";
import { useSession } from "next-auth/react";
import { useEffect, useRef, lazy } from "react";
import { LinksEmptyCard } from "./links-empty-card";
import autoAnimate from "@formkit/auto-animate";
import { LinkCardSkeleton } from "./link-card-skeleton";
const LinkCard = lazy(() => import("./link-card"));

const renderLink = (link) => {
  return <LinkCard link={link} key={link.id}/>;
};

export const LinkList = () => {
  const parent = useRef(null);
  const { data: session } = useSession();
  const { data, isLoading } = useGetLinksByUserId(session?.user.id);
  const links = data || [];

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 mt-2" ref={parent}>
        {isLoading ? (
          <>
            <LinkCardSkeleton />
            <LinkCardSkeleton />
            <LinkCardSkeleton />
          </>
        ) : !links.length ? (
          <LinksEmptyCard />
        ) : (
          links.map(renderLink)
        )}
      </div>
    </div>
  );
};
