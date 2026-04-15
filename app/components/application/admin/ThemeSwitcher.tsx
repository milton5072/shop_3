"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
const ThemeSwitcher = () => {
	// const { setTheme } = useTheme(); // Assuming useTheme is a custom hook to get and set theme
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button variant="ghost" size="icon" className="cursor-pointer">
					<IoSunnyOutline className="dark:hidden" />
					<IoMoonOutline className="hidden dark:block" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
export default ThemeSwitcher;
