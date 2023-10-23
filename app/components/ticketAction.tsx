"use client";
import { Box, Button, Flex, Select } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import ToolTip from "./ToolTip";

export default function TicketActionBar() {
  const router = useRouter();
  const searchParams = useSearchParams().get("status");
  const status = ["OPEN", "CLOSED", "IN_PROGRESS"];

  return (
    <Flex justify={"between"}>
      <Box className="inline-flex items-center gap-2">
      <Select.Root
        defaultValue={
          typeof searchParams === "string" && status?.includes(searchParams)
          ? searchParams
          : "All"
        }
        onValueChange={(status) => {
          const query = status !== "All" ? `?status=${status}` : "";
          router.push(`tickets${query}`);
        }}
      >
        <Select.Trigger placeholder="Sort by Status" />
        <Select.Content>
          <Select.Group>
            <Select.Item value={"All"}>All</Select.Item>
            <Select.Item value={"OPEN"}>Open</Select.Item>
            <Select.Item value={"CLOSED"}>Closed</Select.Item>
            <Select.Item value="IN_PROGRESS">In Progress</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
        <span className="hidden sm:block"><ToolTip toolTipText="this is the ticket status summary"/></span>
        </Box>
      <Button onClick={(e) => e.preventDefault()}>
        <Link href={"/tickets/new"}>Add new Ticket</Link>
      </Button>
    </Flex>
  );
}
