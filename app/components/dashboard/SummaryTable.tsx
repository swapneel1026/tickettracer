import prisma from "@/prisma/client";
import { Avatar, Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import StatusBagde from "../StatusBagde";

const SummaryTable = async () => {
  const allTickets = await prisma.ticket.findMany({
    orderBy: { updatedAt: "asc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <div className="py-4">
      <h1 className="p-4 font-extrabold md:text-xl text-blue-400">Latest Tickets</h1>

      <Table.Root variant="surface" className="mt-4">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell> Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Assigned To</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {allTickets?.map((ticket) => {
            return (
              <Table.Row key={ticket.id}>
                <Table.Cell className="font-semibold text-md cursor-pointer">
                  <Button variant="soft" className="capitalize">
                    <Link href={`tickets/${ticket.id}`}>{ticket.title}</Link>
                  </Button>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <StatusBagde status={ticket.status} />
                </Table.Cell>

                <Table.Cell className="">
                  <Avatar
                    fallback="N/A"
                    src={ticket.assignedToUser?.image as string}
                    radius="full"
                  />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default SummaryTable;
