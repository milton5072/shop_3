import AppSidebar from "@/app/components/application/admin/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "@/app/components/application/admin/TopBar";
const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen">
			<SidebarProvider>
				<div className="hidden md:block w-64 bg-gray-800 text-white p-4">
					<AppSidebar />
				</div>
				{/* Mobile sidebar rendered via Sheet inside AppSidebar */}
				<div className="md:hidden">
					<AppSidebar />
				</div>
				<div className="flex-1 min-w-0 min-h-[calc(100vh-40px)]">
					<TopBar />
					<div className="min-h-[calc(100vh-96px)]">{children}</div>
					<div className="border-t h-10 bg-gray-50 dark:bg-background flex items-center justify-center text-sm">
						<p>All rights reserved by</p>
					</div>
				</div>
			</SidebarProvider>
		</div>
	);
};

export default layout;
