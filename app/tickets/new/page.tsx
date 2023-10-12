"use client";

import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import SimpleMDE from "react-simplemde-editor";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const New = () => {
  
  const router = useRouter();
  const { register, handleSubmit, control } = useForm();
  const onSubmit = async (data: any) => {

    try {
      await axios.post("/api/tickets", data);
      toast.success("Ticket successfully created",{
        theme:"light",
        })
      router.push("/tickets");
    } catch (error) {      
     toast.error("Unexpected Error Occured",{
      theme:"light",
      })
    
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl p-4 flex flex-col space-y-3"
    >
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
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description here" {...field} />
        )}
      />
      <Button className="max-w-fit">Submit New Ticket</Button>
    </form>
  );
};

export default New;
