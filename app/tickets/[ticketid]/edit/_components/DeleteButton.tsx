import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

type ticketProps = {
  id?: number;
};
const DeleteButton = ({  id }: ticketProps) => {
  return (
    <Button
      style={{ marginTop: "16px" }}
      color="red"
    >
      <TrashIcon />
      Delete Issues
    </Button>
  );
};

export default DeleteButton;
