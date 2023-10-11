import Link from "next/link";
import { FaBug } from "react-icons/fa6";

const Navbar = () => {
  interface links {
    name: string;
    href: string;
  }
  const links: links[] = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Tickets", href: "/tickets" },
  ];
  return (
    <nav className="p-4 flex space-x-4 border-b-2">
      <Link href={"/"} className="flex space-x-1 items-center">
        <FaBug />
        <p className="font-extrabold">TicketTracer</p>
      </Link>
      <ul className="flex space-x-2 items-center">
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.name}
              className="text-sm font-semibold cursor-pointer text-zinc-400 hover:text-zinc-700 hover:transition-colors hover:duration-300"
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
