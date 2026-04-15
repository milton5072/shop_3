import * as z from "zod";

export const categorySchema = z.object({
	name: z
		.string()
		.min(2, "Category name must be at least 2 characters")
		.max(50, "Category name cannot exceed 50 characters"),

	slug: z
		.string()
		.min(2, "Slug is required")
		.regex(/^[a-z0-9-]+$/, "Slug must be lowercase and hyphen only"),

	description: z
		.string()
		.min(5, "Description must be at least 5 characters")
		.max(200, "Description too long")
		.optional(),

	isActive: z.boolean().default(true),
});
