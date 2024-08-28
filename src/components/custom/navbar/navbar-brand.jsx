import Link from "next/link";

export const NavbarBrand = () => {
  return (
    <div>
      <Link href="/">
        <h2 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-40% via-green-700 to-app-accent text-transparent bg-clip-text">
          ShortyLink
        </h2>
      </Link>
    </div>
  );
};
