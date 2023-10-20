"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
    refetchOnMount: true,
  });
  return (
    <>
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
        ticketTitle="In-Progress"
        numberofTickets={status?.inProgressTicketcount}
        isLoading={isLoading}
      />
    </>
  );
}
