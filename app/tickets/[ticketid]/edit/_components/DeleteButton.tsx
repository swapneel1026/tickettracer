"use client";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ticketProps = {
  id?: number;
};
const DeleteButton = ({ id }: ticketProps) => {
  const router = useRouter();

  async function ticketdelete(id: any) {
    const deleteResponse = await axios.delete(`/api/tickets/${id}`);
    console.log(deleteResponse);
    
    if (deleteResponse.status===200) {
      toast.success(`Ticket with Title-${deleteResponse?.data?.title} successfully deleted`, {
        theme: "light",
      });
      router.push("/tickets");

    }
  }
  return (
    <Button
      style={{ marginTop: "16px" }}
      color="red"
      onClick={() => ticketdelete(id)}
    >
      <TrashIcon />
      Delete Issues
    </Button>
  );
};

export default DeleteButton;
