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
    <Card style={{ maxWidth: 240, minWidth: 200, padding: "0.625rem" }}>
      <Flex gap="3" align="center" direction={"column"} justify={"center"}>
        <h1 className="text-lg font-medium ">{ticketTitle} Tickets</h1>
        <p
          className={`text-5xl font-semibold ${
            ticketTitle === "Open"
              ? "text-red-500"
              : ticketTitle === "Closed"
              ? "text-green-600"
              : "text-purple-600"
          } `}
        >
          {numberofTickets}
        </p>
      </Flex>
    </Card>
  );
};

export default StatusCountBox;
