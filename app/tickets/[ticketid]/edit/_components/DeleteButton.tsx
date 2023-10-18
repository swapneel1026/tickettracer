"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ticketProps = {
  id?: number;
};
const DeleteButton = ({ id }: ticketProps) => {
  const router = useRouter();
  const[isDeleting,setdeleting]=useState(false);

  async function ticketdelete(id: any) {
    try {
      setdeleting(true)
       await axios.delete(`/api/tickets/${id}`);
      toast.success(`Ticket with successfully deleted`, {
        theme: "light",
      });
      router.push("/tickets");
      router.refresh();
    } catch (error:any) {
      setdeleting(false)
      toast.error(error?.message);
    }
  }
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button className="text-white bg-red-600" disabled={isDeleting} style={{ marginTop: "16px",width:"fit-content" }}>
          <FaTrashCan/>
          Delete Ticket
          <ClipLoader size={"18px"} color="white" loading={isDeleting} />
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete Ticket</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This ticket will no longer be accessible and you will be
          redirected to all tickets page.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button className="text-white bg-red-600"
              onClick={() => ticketdelete(id)}
            >
              Delete Ticket
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteButton;
