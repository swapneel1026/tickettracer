import { PlusIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";

const ToolTip = () => {
  return (
    <Tooltip content="Add to library" >
      <IconButton radius="full">
        <PlusIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ToolTip;
