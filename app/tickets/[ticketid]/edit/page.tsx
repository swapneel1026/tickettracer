import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import NewTicketForm from "../../new/_components/TicketForm";

const EditPage = async ({ params }: { params: { ticketid: string } }) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.ticketid) },
  });
  if(!ticket)notFound()
  return <NewTicketForm ticket={ticket}/>;
};

export default EditPage;
