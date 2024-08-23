'use client';
import { navigationItems } from "@/constants/navigation-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

const renderTabs = (navigationItem, pathname) => {
  return (
    <Link key={navigationItem.label} href={navigationItem.href} className={`
      py-2 transition-colors duration-300
      ${pathname === navigationItem.href && "border-b border-app-accent"}
    `}>
      <li 
        className="text-gray-500 cursor-pointer px-4 py-2 rounded-lg hover:bg-slate-500/10 transition-all duration-300"
      >
        {navigationItem.label}
      </li>
    </Link>
  )
}

export const RootTabs = () => {
  const pathname = usePathname();

  return (
    <div className="w-full px-4 border-b">
      <ul className="flex justify-start overflow-x-auto gap-5">
        {navigationItems.map((item) => (
          renderTabs(item, pathname)
        ))}
      </ul>
    </div>
  );
};
