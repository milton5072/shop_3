"use client";
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
const useCart = () => {
	const cartItems = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();
	const handleIncrease = (id: number) => {
		dispatch(increaseQuantity(id));
	};
	const handleDecrease = (id: number) => {
		dispatch(decreaseQuantity(id));
	};
	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);
	const totalItems = cartItems.reduce(
		(total, item) => total + item.quantity,
		0,
	);
	return {
		cartItems,
		increaseQuantity: handleIncrease,
		decreaseQuantity: handleDecrease,
		subtotal,
		totalItems,
	};
};
export default useCart;
