import { Card, Flex } from "@radix-ui/themes";

type Props = {
  ticketTitle: string;
  numberofTickets: number|undefined;
};
const StatusCountBox = ({ ticketTitle, numberofTickets }: Props) => {
  return (
    <Card style={{ maxWidth: 240, height: 140, minWidth: 200 }}>
      <Flex gap="3" align="center" direction={"column"} justify={"center"}>
        <h1 className="text-lg font-semibold">{ticketTitle} Tickets</h1>
        <p>{numberofTickets}</p>
      </Flex>
    </Card>
  );
};

export default StatusCountBox;
