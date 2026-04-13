"use client";
import useCart from "../features/product/useCart";
export default function Header() {
	const { totalItems } = useCart();

	return (
		<div className="flex items-center justify-between gap-4 p-4">
			<p>Header</p>
			<span>{totalItems}</span>
		</div>
	);
}
