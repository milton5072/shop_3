import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

export interface cartItems extends Product {
	quantity: number;
}
const initialState: cartItems[] = [];
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.push({ ...action.payload, quantity: 1 });
		},
		increaseQuantity: (state, action) => {
			const item = state.find((item) => item.id === action.payload);
			if (item) {
				item.quantity += 1;
			}
		},
		decreaseQuantity: (state, action) => {
			const item = state.find((item) => item.id === action.payload);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
			}
		},
	},
});
export const { addToCart, increaseQuantity, decreaseQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
