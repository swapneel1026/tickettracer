import StatusBagde from "@/app/components/StatusBagde";
import prisma from "@/prisma/client";
import { Heading } from "@radix-ui/themes";
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
    <div>
      <Heading className="capitalize">{ticket?.title}</Heading>
      <StatusBagde status={ticket.status} />
      <p>{ticket?.description}</p>
      <p>{ticket?.updatedAt.toDateString()}</p>
    </div>
  );
};

export default TicketdescriptionPage;
