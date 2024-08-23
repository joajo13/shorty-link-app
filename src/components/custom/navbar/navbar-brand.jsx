import Link from "next/link";

export const NavbarBrand = () => {
  return (
    <div>
      <Link href="/">
        <h2 className="text-primary text-2xl font-bold cursor-pointer">
          Shorty
          <span className="text-app-accent">Link</span>
        </h2>
      </Link>
    </div>
  );
};
