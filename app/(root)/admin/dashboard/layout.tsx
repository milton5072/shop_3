import AppSidebar from "@/app/components/application/admin/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen">
			<SidebarProvider>
				<div className="w-64 bg-gray-800 text-white p-4">
					<AppSidebar />
				</div>
				<div className="flex-1 p-4">{children}</div>
			</SidebarProvider>
		</div>
	);
};

export default layout;
