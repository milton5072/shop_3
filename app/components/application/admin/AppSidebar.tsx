"use client";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import logoBlack from "@/public/globe.svg";
import logoWhite from "@/public/file.svg";
import { Button } from "@/components/ui/button";
import { LuChevronRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
// import adminSidebar from "@/lib/admin/adminSidebar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import adminAppSidebarMenu from "@/lib/admin/adminSidebar";
const AppSidebar = () => {
	const { toggleSidebar } = useSidebar();
	return (
		<Sidebar>
			<SidebarHeader className="border-b">
				<div className="flex items-center justify-between">
					<Image
						src={logoBlack}
						alt="Logo dark"
						width={40}
						height={40}
						className="dark:hidden block"
					/>
					<Image
						src={logoWhite}
						alt="Logo white"
						width={40}
						height={40}
						className="hidden dark:block"
					/>
					<Button
						type="button"
						size="icon"
						className="md:hidden"
						onClick={toggleSidebar}
					>
						<IoMdClose size={20} />
					</Button>
				</div>
			</SidebarHeader>
			<SidebarContent className="p-2">
				<SidebarMenu>
					{adminAppSidebarMenu.map((menu, index) => (
						<Collapsible key={index} className="group/collapsible">
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton
										asChild
										className="font-semibold px-2 py-5"
									>
										<Link href="">
											<menu.icon />
											<span>{menu.title}</span>
											{menu?.submenu && menu.submenu.length > 0 && (
												<LuChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
											)}
										</Link>
									</SidebarMenuButton>
								</CollapsibleTrigger>
								{menu?.submenu && menu.submenu.length > 0 && (
									<CollapsibleContent>
										<SidebarGroup className="mt-1 mb-2">
											<SidebarGroupContent>
												{menu.submenu.map((subMenu, subIndex) => (
													<SidebarGroupLabel
														key={subIndex}
														className="font-bold"
													>
														<Link
															href={subMenu.url || "#"}
															className="w-full pl-2 py-3 hover:bg-gray-100"
														>
															{subMenu.title}
														</Link>
													</SidebarGroupLabel>
												))}
											</SidebarGroupContent>
										</SidebarGroup>
									</CollapsibleContent>
								)}
							</SidebarMenuItem>
						</Collapsible>
					))}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
};
export default AppSidebar;
