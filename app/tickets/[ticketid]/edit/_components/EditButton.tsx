"use client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

type Props = {
  status: string;
  id: number;
};
export default function EditButton({ status, id }: Props) {
  return (
    <Button
      asChild
      style={{
        marginTop: "16px",
        width: "fit-content",
      }}
      disabled={status === "CLOSED"}
    >
      <Link
        href={`/tickets/${id}/edit`}
        className={`flex items-center gap-2 ${
          status === "CLOSED" ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <Pencil2Icon />
        Edit Ticket
      </Link>
    </Button>
  );
}
