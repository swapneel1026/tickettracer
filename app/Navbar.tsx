"use client";
import { Avatar } from "@radix-ui/themes";
import classnames from "classnames";
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

  const currentPath = usePathname();
  return (
    <nav className="py-4 px-6 mb-10 flex space-x-4 border-b-2 justify-between">
      <section className="flex space-x-8 items-center">
        <Link href={"/"} className="flex space-x-2 items-center">
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
                  "text-zinc-800": currentPath === link.href,
                  "text-zinc-400": currentPath !== link.href,
                  "text-sm font-semibold cursor-pointer hover:text-zinc-800 hover:transition-colors hover:duration-300":
                    true,
                })}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </section>
      <ul>
        <Avatar
          // src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="ss"
          radius="full"  
          variant="solid"      

          />
      </ul>
    </nav>
  );
};

export default Navbar;
