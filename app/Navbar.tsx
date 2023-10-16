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
import { useSession } from "next-auth/react";
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
  const { data: session, status } = useSession();

  return (
    <nav className="py-4 px-6 md:flex-row flex-col flex space-y-4 md:space-y-0 md:space-x-2 border-b-2 justify-between fixed top-0 z-10 bg-white w-full">
      <section className="flex md:space-x-8 justify-between md:items-center">
        <Link href={"/"} className="flex space-x-2 items-center">
          <IconContext.Provider value={{ className: "text-blue-500" }}>
            <FaBug />
          </IconContext.Provider>
          <p className="font-extrabold md:text-2xl text-blue-400">
            TicketTracer
          </p>
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
      <ul className="flex space-x-3 items-center justify-center md:justify-normal">
        {status === "authenticated" && (
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Avatar
                src={session?.user?.image!}
                fallback="?"
                radius="full"
                variant="solid"
              />
            </HoverCard.Trigger>
            <HoverCard.Content>
              <Flex gap="4">
                <Avatar
                  src={session?.user?.image!}
                  size="5"
                  fallback="?"
                  radius="full"
                />
                <Box>
                  <Heading size="3" as="h3">
                    {session?.user?.name}
                  </Heading>
                  <Text as="div" size="2" color="gray">
                    {session?.user?.email}
                  </Text>

                  <Text
                    as="div"
                    size="2"
                    style={{ maxWidth: 300 }}
                    mt="3"
                    mb={"3"}
                  >
                    I love Next-JS
                  </Text>
                  <Button variant="soft">
                    <Link href={"/api/auth/signout"}>Signout</Link>
                  </Button>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
        )}
        {status === "unauthenticated" && (
          <Button variant="soft">
            <Link href={"/api/auth/signin"}>Login</Link>
          </Button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
