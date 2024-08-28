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
      style={{ marginTop: "0px" }}
    >
      <Icon size={20} />
    </a>
  );
};
