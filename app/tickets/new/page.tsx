import dynamic from "next/dynamic";
import LoadingSkeleton from "./loading";

const NewTicketForm = dynamic(
  () => import("@/app/tickets/new/_components/TicketForm"),
  {
    ssr: false,
    loading:()=><LoadingSkeleton/>
  }
);
const NewTicket = () => {
  return <NewTicketForm />;
};

export default NewTicket;
