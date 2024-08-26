import { LinkCard } from "./link-card";

export const LinkList = ({initialLinks}) => {
  return (
    <div className="w-full py-7">
      <div className="flex flex-col gap-4 mt-2">
        {initialLinks.map((link) => (
          <LinkCard key={link.customUrl} link={link} />
        ))}
      </div>
    </div>
  );
};
