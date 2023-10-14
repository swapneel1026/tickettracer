import StatusBagde from "@/app/components/StatusBagde";
import prisma from "@/prisma/client";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { ticketid: string };
}

const TicketdescriptionPage = async ({ params }: Props) => {
  if (typeof params.ticketid !== "string") notFound();
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.ticketid) },
  });
  if (!ticket) notFound();

  return (
    <div className="max-w-[70rem] mx-auto">
      <Button style={{ margin: "16px" }}>
        <Link href={"/tickets"}>
          <Flex direction={"row"} align={"center"} justify={"center"} gap={"2"}>
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
      <div className="inline-flex  space-x-4 mx-4 ">
        <StatusBagde status={ticket.status} />
        <Text as="div" size="2" color="gray">
          {ticket?.updatedAt.toDateString()}
        </Text>
      </div>
      <Card className="m-4 w-auto prose">
        <ReactMarkdown>{ticket?.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default TicketdescriptionPage;
