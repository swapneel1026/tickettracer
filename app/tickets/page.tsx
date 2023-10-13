import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";

const TicketsPage = async() => {
  const allTickets=await prisma.ticket.findMany()
  
  return (
    <div className="p-4">
      <Button>
        <Link href={"/tickets/new"}>
        Add new Ticket
        </Link>
      </Button>
      <Table.Root>
        <Table.Header>
        <Table.Row >
            <Table.Cell>Ticket Title</Table.Cell>
            <Table.Cell>Issue</Table.Cell>
            <Table.Cell>Created</Table.Cell>
          </Table.Row>
          </Table.Header>
          <Table.Body>

          {allTickets?.map((ticket)=>{
            return(

          <Table.Row key={ticket.id}>
            <Table.Cell>{ticket.title}</Table.Cell>
            <Table.Cell className="max-w-[15rem] truncate">{ticket.description}</Table.Cell>
            <Table.Cell>{ticket.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
            )
          })}
          </Table.Body>
      </Table.Root>
    </div>
  );
};

export default TicketsPage;
