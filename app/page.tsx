import prisma from "@/prisma/client";
import { Box, Flex } from "@radix-ui/themes";
import StatusCountBox from "./components/dashboard/StatusCountBox";

export default async function Home() {
  const openTicketCount = await prisma.ticket.count({ where: { status: "OPEN" } });
  const closedTicketCount = await  prisma.ticket.count({
    where: { status: "CLOSED" },
  });
  const progressTicketCount =await prisma.ticket.count({
    where: { status: "IN_PROGRESS" },
  });

  console.log(openTicketCount, closedTicketCount, progressTicketCount);

  return (
    <main className="">
      <Box>
        <Flex align="center" gap="4">
          <StatusCountBox ticketTitle="Open" numberofTickets={openTicketCount} />
          <StatusCountBox numberofTickets={closedTicketCount} ticketTitle="Closed" />
          <StatusCountBox ticketTitle="In-Progress" numberofTickets={progressTicketCount} />
        </Flex>
      </Box>
    </main>
  );
}
export const dynamic = 'force-dynamic'; 