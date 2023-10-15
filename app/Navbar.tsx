"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HoverCard,
  Text,
} from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
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
          <IconContext.Provider value={{ className: "text-blue-500" }}>
            <FaBug />
          </IconContext.Provider>
          <p className="font-extrabold text-2xl text-blue-400">TicketTracer</p>
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
      <ul className="flex space-x-3 items-center">
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Avatar
              src="https://avatars.githubusercontent.com/u/62759701?v=4"
              fallback="ss"
              radius="full"
              variant="solid"
            />
          </HoverCard.Trigger>
          <HoverCard.Content>
            <Flex gap="4">
              <Avatar
                src="https://avatars.githubusercontent.com/u/62759701?v=4"
                size="5"
                fallback="ss"
                radius="full"
              />
              <Box>
                <Heading size="3" as="h3">
                  Swapneel Shubham
                </Heading>
                <Text as="div" size="2" color="gray">
                  @swapneel1026
                </Text>

                <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                  I love Next-JS
                </Text>
              </Box>
            </Flex>
          </HoverCard.Content>
        </HoverCard.Root>
        <Button variant="soft">
          <Link href={"/login"}>Login</Link>
        </Button>
        <Button variant="soft">
          <Link href={"/signup"}>Signup</Link>
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
