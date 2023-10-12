'use client'
import classnames from 'classnames';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa6";

const Navbar = () => {
  interface links {
    name: string;
    href: string;
  }
  const links: links[] = [
    { name: "Dashboard", href: "/" },
    { name: "Tickets", href: "/tickets" },
  ];

  const currentPath=usePathname();
  return (
    <nav className="p-4 mb-10 flex space-x-4 border-b-2">
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
              className={classnames({
                'text-zinc-800':currentPath===link.href,
                'text-zinc-400':currentPath!==link.href,
                'text-sm font-semibold cursor-pointer hover:text-zinc-800 hover:transition-colors hover:duration-300':true,
              })}
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
