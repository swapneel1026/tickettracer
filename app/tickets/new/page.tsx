"use client";

import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
const New = () => {
  return (
    <div className="max-w-xl p-4 flex flex-col space-y-3">
      <TextField.Root className="">
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description here" />
      <Button className="max-w-">New Ticket</Button>
    </div>
  );
};

export default New;
