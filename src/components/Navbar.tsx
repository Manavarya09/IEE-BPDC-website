import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">IEE Website</span>
        </div>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
