import { LuUserRound } from "react-icons/lu";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlinePermMedia, MdOutlineShoppingBag } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";
import { TbBrandProducthunt } from "react-icons/tb";
import { IoMdStarOutline } from "react-icons/io";
// import { ADMIN_MEDIA_SHOW } from "../routes/AdminPanelRoute";
import { SidebarMenuItem } from "@/types/sidebar";
import {
	ADMIN_DASHBOARD,
	ADMIN_ADD_CATEGORY_ADD,
	ADMIN_CATEGORY_SHOW,
} from "@/routes/AdminPanelRoute";

const adminAppSidebarMenu: SidebarMenuItem[] = [
	{
		title: "Dashboard",
		icon: AiOutlineDashboard,
		url: ADMIN_DASHBOARD,
	},
	{
		title: "Categories",
		icon: BiCategory,
		url: "#",
		submenu: [
			{
				title: "Add Category",
				url: ADMIN_ADD_CATEGORY_ADD,
				icon: BiCategory,
			},
			{
				title: "All Category",
				url: ADMIN_CATEGORY_SHOW,
				icon: BiCategory,
			},
		],
	},
	{
		title: "Products",
		icon: IoShirtOutline,
		url: "#",
		submenu: [
			{
				title: "Add Product",
				url: "/admin/products/add",
				icon: TbBrandProducthunt,
			},
			{
				title: "Add Variant",
				url: "/admin/products/variants/add",
				icon: TbBrandProducthunt,
			},
			{
				title: "All Products",
				url: "/admin/products",
				icon: TbBrandProducthunt,
			},
			{
				title: "Product Variants",
				url: "/admin/products/variants",
				icon: TbBrandProducthunt,
			},
		],
	},
	{
		title: "Coupons",
		icon: RiCoupon3Line,
		url: "#",
		submenu: [
			{
				title: "Add Coupon",
				url: "/admin/coupons/add",
				icon: RiCoupon3Line,
			},
			{
				title: "All Coupons",
				url: "/admin/coupons",
				icon: RiCoupon3Line,
			},
		],
	},
	{
		title: "Orders",
		icon: MdOutlineShoppingBag,
		url: "#",
	},
	{
		title: "Customers",
		icon: LuUserRound,
		url: "#",
	},
	{
		title: "Ratings & Reviews",
		icon: IoMdStarOutline,
		url: "#",
	},
	{
		title: "Medias",
		icon: MdOutlinePermMedia,
		// url: ADMIN_MEDIA_SHOW,
	},
];
export default adminAppSidebarMenu;
