import Link from "next/link";

export const navbarLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Projects", href: "#projects" },
];

export function NavbarLinks({ isMobile = false }) {
  return (
    <div
      className={`${
        isMobile
          ? "flex-col items-start space-y-2"
          : "flex-row items-center gap-x-2 ml-8"
      } flex`}
    >
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={`group ${isMobile ? "" : "px-3"} py-1 rounded-md font-medium transition text-gray-400 hover:text-blue-500 duration-500 cursor-pointer`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
