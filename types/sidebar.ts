import { IconType } from "react-icons";

export type SidebarMenuItem = {
	title: string;
	icon: IconType;

	// navigation
	url?: string;

	// nested menu
	submenu?: SidebarMenuItem[];
};
