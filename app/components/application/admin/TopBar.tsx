"use client";
import UserDropdown from "./userDropdown";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { RiMenu4Fill } from "react-icons/ri";
import { useSidebar } from "@/components/ui/sidebar";

const TopBar = () => {
	const { toggleSidebar } = useSidebar();
	return (
		<div className="flex items-center justify-between h-14 px-4 border-b">
			<div className="text-lg font-bold">Admin Panel</div>
			<div className="flex items-center space-x-4">
				<ThemeSwitcher />
				<UserDropdown />
				<Button
					type="button"
					size="icon"
					className="md:hidden"
					onClick={toggleSidebar}
				>
					<RiMenu4Fill />
				</Button>
			</div>
		</div>
	);
};
export default TopBar;
