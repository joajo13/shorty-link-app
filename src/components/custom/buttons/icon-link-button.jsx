import { twMerge } from "tailwind-merge";

export const IconLinkButton = ({
  buttonClassName,
  handleClick,
  Icon,
  href,
}) => {
  return (
    <a
      className={twMerge("flex items-center justify-center", buttonClassName)}
      onClick={handleClick}
      href={`${href}`}
      target="_blank"
    >
      <Icon size={20} />
    </a>
  );
};
