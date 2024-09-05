"use client";
import { Suspense, useEffect, useRef, lazy, useState } from "react";
import { LinksEmptyCard } from "./links-empty-card";
import autoAnimate from "@formkit/auto-animate";
import { LinkCardSkeleton } from "./link-card-skeleton";
import { useGetPublicLinks } from "@//hooks/link/useGetPublicLinks";
import { HiEyeSlash, HiEye } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
const LinkCard = lazy(() => import("./link-card"));

const renderLink = (link) => {
  return (
    <Suspense fallback={<LinkCardSkeleton />} key={link.customUrl}>
      <LinkCard link={link} />
    </Suspense>
  );
};

export const PublicLinkList = () => {
  const [linksVisible, setLinksVisible] = useState(true);
  const parent = useRef(null);
  const { data, isLoading } = useGetPublicLinks();
  const links = data || [];

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-xl text-app-accent font-semibold">
          Most famous links
        </h2>
        <Button variant="ghost" onClick={() => setLinksVisible(!linksVisible)}>
          {linksVisible ? <HiEyeSlash /> : <HiEye />}
        </Button>
      </div>

      <div
        className={`flex-col gap-4 mt-2 flex ${
          !linksVisible ? "h-[0px] overflow-hidden" : "h-full"
        }`}
        ref={parent}
      >
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
