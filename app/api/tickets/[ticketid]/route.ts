import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const ticketSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is Required"),
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: { ticketid: string } }
) {
  const body = await request.json();
  const validation = ticketSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
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
    },
  });
  return NextResponse.json(updatedTicket, {
    status: 201,
    statusText: "Data updated successfully",
  });
}
