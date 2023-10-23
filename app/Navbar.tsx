"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Popover,
  Text,
} from "@radix-ui/themes";
import classnames from "classnames";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { FaBug } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Navbar = () => {
  interface links {
    name: string;
    href: string;
  }
  const links: links[] = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Tickets", href: "/tickets" },
  ];

  const currentPath = usePathname();
  const { data: session, status } = useSession();
  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: "http://localhost:3000" });
  const logoutWithGoogle = () => signOut();

  return (
    <nav className="py-5 px-6 md:flex-row flex-col flex space-y-4 md:space-y-0 md:space-x-2 border-b-2 justify-between fixed top-0 z-10 bg-white w-full">
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
          <Popover.Root>
            <Popover.Trigger>
              <Avatar
                className="cursor-pointer"
                src={session?.user?.image!}
                loading="lazy"
                fallback={"?"}
                radius="full"
                variant="solid"
                size={"3"}
              />
            </Popover.Trigger>
            <Popover.Content>
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
                  <Button variant="soft" onClick={() => logoutWithGoogle()}>
                    Signout
                  </Button>
                </Box>
              </Flex>
            </Popover.Content>
          </Popover.Root>
        )}
        {status === "unauthenticated" && (
          <Button variant="soft" onClick={() => loginWithGoogle()}>
            Login
          </Button>
        )}
        {status === "loading" && <Skeleton width={"3rem"} height={"2.25rem"} />}
      </ul>
    </nav>
  );
};

export default Navbar;
