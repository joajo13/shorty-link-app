import { twMerge } from "tailwind-merge";

export const PageTitle = ({ title, containerClassName, titleClassName }) => {
  return (
    <div
      className={twMerge(
        "flex justify-between items-center w-full pb-3 pt-1",
        containerClassName
      )}
    >
      <h1
        className={twMerge(
          "text-2xl font-semibold text-app-accent",
          titleClassName
        )}
      >
        {title}
      </h1>
    </div>
  );
};
