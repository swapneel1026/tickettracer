import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import LoadingSkeleton from "../../new/loading";

// disbaling ssr for this component
const NewTicketForm = dynamic(
  () => import("../../new/_components/TicketForm"),
  {
    ssr: false,
    loading:()=><LoadingSkeleton/>  
  }
);

const EditPage = async ({ params }: { params: { ticketid: string } }) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.ticketid) },
  });
  if (!ticket) notFound();
  return <NewTicketForm ticket={ticket} />;
};

export default EditPage;
