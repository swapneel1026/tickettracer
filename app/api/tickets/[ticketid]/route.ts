import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
// const ticketSchema = z.object({
//   title: z.string().min(1, "Title is required").max(255),
//   description: z.string().min(1, "Description is Required"),
// });
const patchTicketSchema = z.object({
  title: z.string().min(1, "Title is required").max(255).optional(),
  description: z.string().min(1, "Description is Required").optional(),
  assignedToUserId: z
    .string()
    .min(1, "assignedToUserId is required")
    .optional()
    .nullable(),
    assignedUserName:z
    .string()
    .min(1, "assignedUserName is required")
    .optional()
    .nullable(),
    
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: { ticketid: string } }
) {
  const body = await request.json();
  console.log("body",body);
  
  const validation = patchTicketSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  if (body.assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: body.assignedToUserId },
    });
    if (!user)
      return NextResponse.json(
        { error: "Invalid user" },
        {
          status: 400,
        }
      );
  }
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.ticketid) },
  });
  if (!ticket)
    return NextResponse.json({ error: "Invalid ticket" }, { status: 404 });
  const updatedTicket = await prisma.ticket.update({
    where: { id: parseInt(params.ticketid) },
    data: {
      title: body.title,
      description: body.description,
      assignedToUserId:body.assignedToUserId,
      assignedUserName:body.assignedUserName
    },
  });
  return NextResponse.json(updatedTicket, {
    status: 201,
    statusText: "Data updated successfully",
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { ticketid: string } }
) {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.ticketid) },
  });
  if (!ticket)
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });

  await prisma.ticket.delete({
    where: { id: parseInt(params.ticketid) },
  });
  return NextResponse.json(
    { title: ticket.title },
    { status: 200, statusText: "Ticket deleted successfully" }
  );
}
