import { Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  ticketTitle: string;
  numberofTickets: number;
  isLoading: boolean;
};
const StatusCountBox = ({ ticketTitle, numberofTickets, isLoading }: Props) => {
  if (isLoading)
    return (
      <Card style={{ maxWidth: 240, height: 140, minWidth: 200 }}>
        <h1>
          <Skeleton height={"1.5rem"} />
        </h1>
        <p>
          <Skeleton height={"1rem"} style={{ marginTop: "1rem" }} />
        </p>
      </Card>
    );
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
