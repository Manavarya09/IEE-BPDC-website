import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/", className: "text-green-400 font-semibold" },
  { name: "About Us", href: "/about", className: "hover:text-green-400 transition" },
  { name: "IEEE Benefits", href: "#", className: "hover:text-green-400 transition" },
  { name: "Our Events", href: "/events", className: "hover:text-green-400 transition" },
  { name: "Our Team", href: "#", className: "hover:text-green-400 transition" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-[#232846] py-4 px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="/file.svg" alt="IEEE Logo" width={60} height={60} />
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg">IEEE</span>
          <span className="text-yellow-300 text-xs">Bits Pilani Dubai Campus</span>
          <span className="text-white text-xs">IEEE Student Branch</span>
        </div>
      </div>
      <nav className="mt-4 md:mt-0 flex gap-8 text-white text-base">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className={item.className}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
