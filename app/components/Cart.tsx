"use client";
import useCart from "../features/product/useCart";

export default function Cart() {
	const {
		cartItems,
		increaseQuantity,
		decreaseQuantity,
		subtotal,
		totalItems,
	} = useCart();

	return (
		<div>
			<ul className=" pt-4 grid grid-cols-2 gap-4">
				{cartItems.map((item) => (
					<li
						key={item.id}
						className="border border-slate-800 p-4 flex-col gap-4 flex "
					>
						<h2>{item.name}</h2>
						<p className="text-sm">Price: ${item.price.toFixed(2)}</p>
						<div className="flex  items-center justify-center border border-slate-800 px-3 py-1">
							<button
								className="flex-1 text-center"
								onClick={() => increaseQuantity(item.id)}
							>
								+
							</button>
							<p className="flex-1 text-center">{item.quantity}</p>
							<button
								className="flex-1 text-center"
								onClick={() => decreaseQuantity(item.id)}
							>
								-
							</button>
						</div>
						<p className="text-sm">
							Item Total: ${(item.quantity * item.price).toFixed(2)}
						</p>
					</li>
				))}
			</ul>
			<p className="text-sm">Sub Total: {subtotal.toFixed(2)}</p>
			<p className="text-sm">Total Items: {totalItems}</p>
		</div>
	);
}
