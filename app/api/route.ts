import { NextResponse } from "next/server";

export async function GET() {
    return Response.json({ message: "This is GET", status: 200 });
}