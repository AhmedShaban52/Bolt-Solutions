"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About-us" },
  { name: "Team", href: "/team" },
  { name: "Projects", href: "/Projects" },
];

export function NavbarLinks() {
  const location = usePathname();

  return (
    <div className="hidden md:flex justify-center items-center gap-x-2 ml-8">
      {navbarLinks.map((item) => {
        const isActive = location === item.href;
        return (
          <Link
            href={item.href}
            key={item.name}
            className={`group px-3 py-1 rounded-md font-medium transition text-gray-400 hover:text-blue-500 duration-500`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
