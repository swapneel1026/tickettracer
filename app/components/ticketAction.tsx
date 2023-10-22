"use client";
import { Status } from "@prisma/client";
import { Button, Flex, Select } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TicketActionBar() {
  const router=useRouter()
  return (
    <Flex justify={"between"}>
      <Select.Root onValueChange={(status:Status)=>{
        const query=status?`?status=${status}`:""
        router.push(`tickets${query}`)
      }}>
        <Select.Trigger placeholder="Sort by Status" />
        <Select.Content>
          <Select.Group>
            <Select.Item value={"All"}>
              All
            </Select.Item>
            <Select.Item value={"OPEN"}>
              Open
            </Select.Item>
            <Select.Item value={"CLOSED"}>
              Closed
            </Select.Item>
            <Select.Item value="IN_PROGRESS">
              In Progress
            </Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Button onClick={(e) => e.preventDefault()}>
        <Link href={"/tickets/new"}>Add new Ticket</Link>
      </Button>
    </Flex>
  );
}
