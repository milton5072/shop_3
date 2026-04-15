import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Category from "@/models/Category";

export async function POST(req: Request) {
	try {
		await connectToDatabase();

		const body = await req.json();

		const { name, slug, description } = body;

		if (!name || !slug) {
			return NextResponse.json(
				{ error: "Name and slug are required" },
				{ status: 400 },
			);
		}

		const category = await Category.create({
			name,
			slug,
			description,
		});

		return NextResponse.json(
			{ message: "Category created", data: category },
			{ status: 201 },
		);
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
