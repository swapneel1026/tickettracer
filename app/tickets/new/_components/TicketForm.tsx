"use client";
import { Ticket } from "@prisma/client";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// disabling ssr using dynamic from next/dynamic
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface Props {
  ticket?: Ticket;
}

const NewTicketForm = ({ ticket }: Props) => {
  type FormDetails = {
    title: string;
    description: string;
  };
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDetails>();
  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/tickets", data);
      toast.success("Ticket successfully created", {
        theme: "light",
      });
      router.push("/tickets");
      router.refresh();
    } catch (error) {
      toast.error("Unexpected Error Occured", {
        theme: "light",
      });
    }
  };

  return (
    <>
      {ticket?.status !== "CLOSED" ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl p-4 flex flex-col space-y-3"
        >
          <Button
            className="max-w-fit"
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            <FaArrowLeft width="16" height="16" />
            Back
          </Button>
          <TextField.Root>
            <TextField.Input
              defaultValue={ticket?.title}
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
            />
          </TextField.Root>
          <small className="text-red-500 font-semibold">
            {errors?.title?.message}
          </small>
          <Controller
            name="description"
            rules={{ required: "Description is required" }}
            control={control}
            defaultValue={ticket?.description}
            render={({ field }) => (
              <SimpleMDE placeholder="Description here" {...field} />
            )}
          />
          <small className="text-red-500 font-semibold">
            {errors?.description?.message}
          </small>

          <Button className="max-w-fit">Submit New Ticket</Button>
        </form>
      ) : (
        <div>Ticket has been CLOSED</div>
      )}
    </>
  );
};

export default NewTicketForm;