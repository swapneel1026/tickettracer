import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import StatusBagde from "../components/StatusBagde";

const TicketsPage = async() => {
  const allTickets=await prisma.ticket.findMany()
  
  return (
    <div className="px-6 py-4">
      <Button className="">
        <Link href={"/tickets/new"}>
        Add new Ticket
        </Link>
      </Button>
      <Table.Root variant="surface" className="mt-4" >
        <Table.Header>
        <Table.Row>
            <Table.ColumnHeaderCell>Ticket Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Created At</Table.ColumnHeaderCell>
          </Table.Row>
          </Table.Header>
          <Table.Body>

          {allTickets?.map((ticket)=>{
            return(

          <Table.Row key={ticket.id}>
            <Table.Cell className="capitalize">{ticket.title}
            <small className="block md:hidden">{ticket.status}</small>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <StatusBagde status={ticket.status}/>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell ">{ticket.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
            )
          })}
          </Table.Body>
      </Table.Root>
    </div>
  );
};
export const revalidate='force';
export default TicketsPage;
