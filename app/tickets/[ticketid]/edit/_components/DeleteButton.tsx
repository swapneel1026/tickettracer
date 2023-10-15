import { $Enums } from "@prisma/client";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

type ticketProps = {
  id?: number;
  status?: $Enums.Status;
};
const DeleteButton = ({ status, id }: ticketProps) => {
  return (
    <Button
      style={{ marginTop: "16px" }}
      disabled={status === "CLOSED"}
      color="red"
    >
      <TrashIcon />
      Delete Issues
    </Button>
  );
};

export default DeleteButton;
