"use client";
import { Grid } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ToolTip from "../ToolTip";
import StatusCountBox from "./StatusCountBox";

export default function StatusSummary() {
  const {
    data: status,
    isLoading,
    error,
  } = useQuery<any>({
    queryKey: ["status"],
    queryFn: () => {
      return axios
        .get("/api/tickets/ticketstatuscount")
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    retry: 3,
    staleTime: 6000 * 10,
    refetchInterval: 30000,
    refetchOnWindowFocus: true,
  });
  return (
    <>
    <h1 className="font-extrabold md:text-xl text-blue-400 p-4 inline-flex items-center gap-2">Summary <span className="hidden md:block"><ToolTip toolTipText="this is the ticket status summary"/></span></h1>
      <Grid className="mx-auto" columns={{initial:"1",md:"3"}} gap={{initial:"5",md:"7"}}>
        <StatusCountBox
          ticketTitle="Open"
          numberofTickets={status?.openTicketcount}
          isLoading={isLoading}
        />
        <StatusCountBox
          numberofTickets={status?.closedTicketcount}
          ticketTitle="Closed"
          isLoading={isLoading}
        />
        <StatusCountBox
          ticketTitle="Progress"
          numberofTickets={status?.inProgressTicketcount}
          isLoading={isLoading}
        />
      </Grid>
    </>
  );
}
