import React from "react";
import Image from "next/image";

import dashboard from "../../assets/dashboard.svg";
import order from "../../assets/order.svg";
import categories from "../../assets/categories.svg";
import products from "../../assets/products.svg";
import account from "../../assets/account.svg";
import MenuItem from "./MenuItem";

export default function MenuDisplay() {
	const [display, setDisplay] = React.useState(false);

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
	};
const keys = Object.keys(items);
console.log(items);
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
