import { LinkCard } from "./link-card";

const currentLinks = [
  {
    id: 1,
    originalLink: "https://www.google.com",
    customLink: "google",
    favicon: "https://www.google.com/favicon.ico",
    createdAt: "2021-10-10",
    modifiedAt: null,
  },
  {
    id: 2,
    originalLink: "https://www.facebook.com",
    customLink: "Jesse",
    favicon: "https://www.facebook.com/favicon.ico",
    createdAt: "2021-10-10",
    modified: "2024-4-10",
  },
  {
    id: 3,
    originalLink: "https://www.twitter.com",
    customLink: "twitter",
    favicon: "https://www.twitter.com/favicon.ico",
    createdAt: "2021-10-10",
    modifiedAt: null,
  },
  {
    id: 4,
    originalLink: "https://www.instagram.com",
    customLink: "instagram",
    favicon: "https://www.instagram.com/favicon.ico",
    createdAt: "2021-10-10",
    modifiedAt: null,
  },
  {
    id: 5,
    originalLink: "https://www.linkedin.com",
    customLink: "linkedin",
    favicon: "https://www.linkedin.com/favicon.ico",
    createdAt: "2021-10-10",
    modifiedAt: null,
  },
];

export const LinkList = () => {
  return (
    <div className="w-full py-7">
      <div className="flex flex-col gap-4 mt-2">
        {currentLinks.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
};
