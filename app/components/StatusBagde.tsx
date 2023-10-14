import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

const StatusBagde = ({ status }: { status: Status }) => {
  return (
    <Badge size={"2"} color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default StatusBagde;
