import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET() {
  const data = await prisma.dog_infos.findMany();
  return NextResponse.json({ status: 200, data: data });
}
