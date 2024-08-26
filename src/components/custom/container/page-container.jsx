import { twMerge } from "tailwind-merge";

export const PageContainer = ({
  children,
  mainClassName,
  sectionClassName,
}) => {
  return (
    <main
      className={twMerge(
        "flex min-h-app justify-center overflow-y-auto mt-[122px] z-0",
        mainClassName
      )}
    >
      <section className={twMerge("py-2 w-full", sectionClassName)}>
        {children}
      </section>
    </main>
  );
};
