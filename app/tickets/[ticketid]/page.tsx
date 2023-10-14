import prisma from "@/prisma/client";

type Props = {
  ticketid: string;
};
const TicketdescriptionPage = async ({ params }: { params: Props }) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.ticketid) },
  });

  return (
    <div>
      <p>{ticket?.id}</p>
      <p>{ticket?.title}</p>
      <p>{ticket?.description}</p>
      <p>{ticket?.status}</p>
      <p>{ticket?.updatedAt.toDateString()}</p>
    </div>
  );
};

export default TicketdescriptionPage;
