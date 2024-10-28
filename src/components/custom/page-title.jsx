import { twMerge } from "tailwind-merge";

export const PageTitle = ({ title, containerClassName, titleClassName }) => {
  return (
    <div
      className={twMerge(
        "flex justify-between items-center w-full py-4",
        containerClassName
      )}
    >
      <h1
        className={twMerge(
          "text-3xl font-semibold text-app-accent",
          titleClassName
        )}
      >
        {title}
      </h1>
    </div>
  );
};
