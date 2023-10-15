import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const loading = async() => {
  const allTickets = await prisma.ticket.findMany();
  return (
    <div className="p-4 max-w-[70rem] mx-auto">
       <Button >
      Add new Ticket
    </Button>
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
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {allTickets?.map((ticket) => {
            return (
              <Table.Row key={ticket.id}>
                <Table.Cell className="capitalize">
                  <Skeleton />
                  <small className="block md:hidden">
                    <Skeleton />
                  </small>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell ">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default loading;
