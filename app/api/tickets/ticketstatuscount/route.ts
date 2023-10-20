import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const openTicketcount = await prisma.ticket.count({
      where: { status: "OPEN" },
    });
    const closedTicketcount = await prisma.ticket.count({
      where: { status: "CLOSED" },
    });
    const inProgressTicketcount = await prisma.ticket.count({
      where: { status: "IN_PROGRESS" },
    });
    
    return NextResponse.json({openTicketcount,closedTicketcount,inProgressTicketcount}, {
      status: 201,
      statusText: "ticket counts fetched",
    });
  }
export const dynamic = "force-dynamic";
