import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
    return Response.json({ message: "This is GET" });
}