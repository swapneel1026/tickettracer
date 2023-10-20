"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function Barchart() {
  interface Props {
    open: number;
    closed: number;
    inprogress: number;
  }
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
  const data = [
    { label: "Open", value: status?.openTicketcount },
    { label: "In Progress", value: status?.inProgressTicketcount },
    { label: "Closed", value: status?.closedTicketcount },
  ];

  return (
    <div style={{ width: "100%", height: 300 }} className="">
        <h1 className="font-extrabold md:text-xl p-4 text-blue-400">Bar-Chart Summary</h1>
      <ResponsiveContainer width={"100%"}>
        <BarChart
          data={data}
        >
          <XAxis dataKey={"label"} />
          <YAxis width={30}/>
          <Bar
            dataKey={"value"}
            barSize={60}
            fill={ "#6e56cf"
                }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
