import Cart from "./components/Cart";
import Product from "./components/Product";
import Headers from "./components/Header";
export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<Headers />
			<div>
				<Product />
			</div>
			<div>
				<Cart />
			</div>
		</div>
	);
}
