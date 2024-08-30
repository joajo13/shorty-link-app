'use client';
import { useSession } from "next-auth/react";
import { twMerge } from "tailwind-merge";

export const PageContainer = ({
  children,
  mainClassName,
  sectionClassName,
}) => {
  const {data: session} = useSession();
  return (
    <main
      className={twMerge(
        `flex justify-center overflow-y-auto z-0
        ${!session ? "pt-[52px]" : "pt-[102px]"}
        `,
        mainClassName
      )}
    >
      <section className={twMerge("py-2 w-full px-2", sectionClassName)}>
        {children}
      </section>
    </main>
  );
};
