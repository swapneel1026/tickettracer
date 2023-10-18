import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import StatusBagde from "../components/StatusBagde";
import TicketActionBar from "../components/ticketAction";
import Dropdown from "./[ticketid]/edit/_components/Dropdown";

const TicketsPage = async () => {
  const allTickets = await prisma.ticket.findMany();
  const reversedTickets = allTickets.reverse();
  // console.log(reversedTickets);

  return (
    <div className="p-4 max-w-[70rem] mx-auto">
      {allTickets?.length !== 0 ? (
        <>
          <TicketActionBar />
          <Table.Root variant="surface" className="mt-4">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Ticket Title</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="hidden md:table-cell">
                  Status
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="hidden md:table-cell">
                  Created At
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Assigned To</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {reversedTickets?.map((ticket) => {
                return (
                  <Table.Row key={ticket.id}>
                    <Table.Cell className="font-semibold text-md cursor-pointer">
                      <Button variant="soft" className="capitalize">
                        <Link href={`tickets/${ticket.id}`}>
                          {ticket.title}
                        </Link>
                      </Button>
                      <span className="block md:hidden mt-2 md:mt-0">
                        <StatusBagde status={ticket.status} />
                      </span>
                      <span className="block md:hidden mt-2 md:mt-0">
                        {ticket.createdAt.toDateString()}
                      </span>
                    </Table.Cell>
                    <Table.Cell className="hidden md:table-cell ">
                      <StatusBagde status={ticket.status} />
                    </Table.Cell>
                    <Table.Cell className="md:table-cell hidden ">
                      {ticket.createdAt.toDateString()}
                    </Table.Cell>
                    <Table.Cell className="table-cell">
                      {/* <span className={`${ticket.assignedUserName?"text-green-600":"text-red-500"} block mt-8 md:mt-0 font-semibold`}>
                        {ticket.assignedUserName||"Unassigned"}
                      </span> */}
                      <Dropdown
                        status={ticket?.status}
                        id={ticket?.id}
                        assignedInfo={ticket}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
        </>
      ) : (
        <section className="flex place-content-center place-items-center space-x-2 mt-32">
          <p className="text-3xl font-bold">No data to show.</p>
          <Button>
            <Link href="/tickets/new">Add new ticket here</Link>
          </Button>
        </section>
      )}
    </div>
  );
};
export const revalidate = "force";
export default TicketsPage;
