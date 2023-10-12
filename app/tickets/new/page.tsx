"use client";

import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import SimpleMDE from "react-simplemde-editor";
const New = () => {
  const router = useRouter();
  return (
    <div className="max-w-xl p-4 flex flex-col space-y-3">
      <Button
        className="max-w-fit"
        onClick={() => {
          router.back();
        }}
      >
        <FaArrowLeft width="16" height="16" />
        Back
      </Button>
      <TextField.Root className="">
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description here" />
      <Button className="max-w-fit">New Ticket</Button>
    </div>
  );
};

export default New;
