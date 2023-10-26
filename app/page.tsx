import { Box, Button, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FaCheckDouble } from "react-icons/fa6";

const Welcome = () => {
  const construction = true;
  return !construction ? (
    <Flex
      direction={"row"}
      justify={"between"}
      gap={"4"}
      className="bg-blue-200 h-screen"
    >
      <Box className="border-2 w-1/2 p-6"></Box>
      <Box className="p-6 mt-16">
        <div className="max-w-2xl">
          <h1 className="mt-4 text-5xl font-semibold ">Ticketing System</h1>
          <p className="mt-6 text-xl font-light max-w-lg">
            Track and prioritize incoming service requests in one shared inbox
            that keeps your team organized and your customers delighted.
          </p>
          <Button asChild color="blue" variant="classic" className="mt-6">
            <Link href={"/dashboard"}>Get started free</Link>
          </Button>
          <ul className="mt-8">
            <li className="inline-flex items-center gap-1">
              <FaCheckDouble />
              View every service issue and customer detail in one place
            </li>

            <li className="inline-flex items-center gap-1">
              <FaCheckDouble />
              Prioritize and assign tickets to improve customer experience
            </li>

            <li className="inline-flex items-center gap-1">
              <FaCheckDouble />
              Automate task assignment, tagging, and escalation
            </li>
          </ul>
        </div>
      </Box>
    </Flex>
  ) : (
    <Flex
      direction={"row"}
      justify={"center"}
      gap={"4"}
      className="bg-blue-200 h-screen"
    >
      <Image
        alt="underconstruction"
        src={"/2464452.jpg"}
        quality={100}
        height={1000}
        width={1024}
      />
    </Flex>
  );
};

export default Welcome;
