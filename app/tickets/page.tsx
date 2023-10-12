"use client";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const TicketsPage = () => {
  const router = useRouter();
  return (
    <div className="p-4">
      <Button
        onClick={() => {
          router.push("/tickets/new");
        }}
      >
        Add new Ticket
      </Button>
    </div>
  );
};

export default TicketsPage;
