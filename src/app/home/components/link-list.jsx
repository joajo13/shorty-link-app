"use client";
import { useGetLinks } from "@/hooks/link/useGetLinks";
import { useSession } from "next-auth/react";
import { Suspense, useEffect, useRef, lazy } from "react";
import { LinksEmptyCard } from "./links-empty-card";
import autoAnimate from "@formkit/auto-animate";
import { LinkCardSkeleton } from "./link-card-skeleton";
const LinkCard = lazy(() => import("./link-card"));


const renderLink = (link) => {
  return (
    <Suspense fallback={<LinkCardSkeleton />} key={link.customUrl}>
      <LinkCard link={link} />
    </Suspense>
  );
};

export const LinkList = () => {
  const parent = useRef(null);
  const { data: session } = useSession();
  const { data, isLoading } = useGetLinks(session?.user.id);
  const links = data || [];

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="w-full py-7">
      <div className="flex flex-col gap-4 mt-2" ref={parent}>

        {isLoading ? (
          <LinkCardSkeleton />
        ) : !links.length ? (
          <LinksEmptyCard />
        ) : (
          links.map(renderLink)
        )}

      </div>
    </div>
  );
};
