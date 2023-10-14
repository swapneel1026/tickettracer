import { Button } from "@radix-ui/themes";
import Link from "next/link";

    export default function TicketActionBar() {
      return (<Button className="">
        <Link href={"/tickets/new"}>
        Add new Ticket
        </Link>
      </Button>);
    }
  
  