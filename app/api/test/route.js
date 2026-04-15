import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function GET() {
	await connectToDatabase();
	return NextResponse.json({
		success: true,
		message: "connection success.",
	});
}
