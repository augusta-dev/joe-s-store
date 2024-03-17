import dashboard from "../../assets/dashboard.svg";
import order from "../../assets/order.svg";
import categories from "../../assets/categories.svg";
import products from "../../assets/product.png";
import account from "../../assets/account.svg";
import MenuItem from "./MenuItem";
import signin from "../../assets/signin.svg";
import signup from "../../assets/signup.png";
import admin from "../../assets/admin.svg";

export default function MenuDisplay() {
	const items = {
		Dashboard: { image: dashboard, link: "/", items: [] },
		Orders: {
			image: order,
			link: "/orders",
			items: ["In Progress", "Completed"],
		},
		Categories: {
			image: categories,
			link: "/categories",
			items: [
				"Men",
				"Women",
				"Children",
				"Sweatshirts",
				"Shirts",
				"Trousers",
				"Shorts",
				"Shoes",
			],
		},
		Products: { image: products, link: "/products", items: [] },
		"My Account": { image: account, link: "/account", items: [] },
		Signin: { image: signin, link: "/signin", items: [] },
		Signup: { image: signup, link: "/signup", items: [] },
		Admin: { image: admin, link: "/admin", items: [] },
	};
	const keys = Object.keys(items);
	return (
		<>
			{keys.map((key) => (
				<MenuItem
					key={key}
					heading={key}
					image={items[key as keyof typeof items].image}
					link={items[key as keyof typeof items].link}
					items={items[key as keyof typeof items].items}
				/>
			))}
		</>
	);
}
