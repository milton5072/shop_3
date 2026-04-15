// routes/admin.ts

export const ADMIN_DASHBOARD: string = "/admin/dashboard";

// CATEGORY ROUTES
export const ADMIN_CATEGORY_SHOW: string = "/admin/dashboard/category";
export const ADMIN_ADD_CATEGORY_ADD: string = "/admin/dashboard/category/add";

// dynamic route with type safety
export const ADMIN_EDIT_CATEGORY = (id: string | number): string => {
	return `/admin/dashboard/category/edit/${id}`;
};
