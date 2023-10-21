import prisma from "@/prisma/client";
import { Avatar, Table, Text } from "@radix-ui/themes";
import StatusBagde from "../StatusBagde";

const SummaryTable = async () => {
  const allTickets = await prisma.ticket.findMany({
    orderBy: { createdAt:'desc' },
    take: 8,
    include: {
      assignedToUser:true
    },
  });
  return (
    <div className="py-4">
      <h1 className="mt-8 font-extrabold md:text-xl text-blue-400">Latest Tickets Updates</h1>

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
                  <Text  className="capitalize text-blue-500 ">
                    {ticket.title}
                  </Text>
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
