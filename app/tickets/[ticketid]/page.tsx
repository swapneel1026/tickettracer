import StatusBagde from "@/app/components/StatusBagde";
import prisma from "@/prisma/client";
import { Card, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

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
      <Heading
        size={"8"}
        style={{ marginInline: "16px", marginBottom: "8px" }}
        className="w-auto capitalize"
      >
        {ticket?.title}
      </Heading>
      <div className="inline-flex space-x-4 mx-4 ">
        <StatusBagde   status={ticket.status} />
        <Text as="div" size="2" color="gray">
          {ticket?.updatedAt.toDateString()}
        </Text>
      </div>
      <Card className="m-4 w-auto ">
        <p>{ticket?.description}</p>
      </Card>
    </div>
  );
};

export default TicketdescriptionPage;
