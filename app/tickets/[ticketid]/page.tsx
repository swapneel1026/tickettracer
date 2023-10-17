import StatusBagde from "@/app/components/StatusBagde";
import prisma from "@/prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Text
} from "@radix-ui/themes";
import delay from "delay";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import DeleteButton from "./edit/_components/DeleteButton";
import Dropdown from "./edit/_components/Dropdown";

interface Props {
  params: { ticketid: string };
}

const TicketdescriptionPage = async ({ params }: Props) => {
  if (typeof params.ticketid !== "string") notFound();
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.ticketid) },
  });
  if (!ticket) notFound();
  await delay(3000);

  return (
    <Grid
      className="max-w-[70rem] mx-auto border rounded-lg"
      columns={{ initial: "1", md: "2" }}
    >
      <Box>
        <Button style={{ margin: "16px" }}>
          <Link href={"/tickets"}>
            <Flex
              direction={"row"}
              align={"center"}
              justify={"center"}
              gap={"2"}
            >
              <FaArrowLeft />
              Back
            </Flex>
          </Link>
        </Button>
        <Heading
          size={"8"}
          style={{ marginInline: "16px", marginBottom: "8px" }}
          className="w-auto capitalize"
        >
          {ticket?.title}
        </Heading>
        <div className="inline-flex items-center space-x-4 mx-4 ">
          <StatusBagde status={ticket.status} />
          <Text as="div" size="2" color="gray">
            {ticket?.updatedAt.toDateString()}
          </Text>
        </div>
        <Card className="m-4 w-auto prose">
          <ReactMarkdown>{ticket?.description}</ReactMarkdown>
        </Card>
      </Box>

      <Box className="inline-flex space-x-2 justify-center lg:justify-normal">
      <Dropdown className={"mt-4"}/>
        <Button
          style={{ marginTop: "16px" }}
          disabled={ticket?.status === "CLOSED"}
        >
          <Link
            href={`/tickets/${ticket?.id}/edit`}
            className={`flex items-center gap-2 ${
              ticket?.status === "CLOSED"
                ? "pointer-events-none"
                : "pointer-events-auto"
            }`}
          >
            <Pencil2Icon />
            Edit Ticket
          </Link>
        </Button>
        <DeleteButton id={ticket?.id} />
      </Box>
    </Grid>
  );
};

export default TicketdescriptionPage;
