"use client";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { Product } from "../product/productSlice";
import { addToCart } from "./cartSlice";
const useProduct = () => {
	const products = useAppSelector((state) => state.product);
	const cartItems = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	const handleAddToCart = (product: Product) => {
		const existingCartItem = cartItems.some((item) => item.id === product.id);
		if (existingCartItem) {
			alert("Product is already in the cart");
			return;
		}
		dispatch(addToCart(product));
		alert("Product added to cart successfully");
	};
	return { products, handleAddToCart };
};
export default useProduct;
