import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const ticketSchema = z.object({
  title: z.string().min(1,"Description is Required").max(999),
  description: z.string().min(1,"Title is required").max(255),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = ticketSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400
    });
  const newTicket = await prisma.ticket.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(newTicket, {
    status: 201,
    statusText: "New ticket generated",
  });
}
