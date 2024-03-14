import React, { useEffect } from "react";
import Image from "next/image";
import MenuSelectItem from "./MenuSelectItem";

import dashboard from "../../assets/dashboard.svg";
import order from "../../assets/order.svg";
import categories from "../../assets/categories.svg";
import products from "../../assets/products.svg";
import account from "../../assets/account.svg";

const MenuItem = () => {
	const [value, setValue] = React.useState("+");
	const [display, setDisplay] = React.useState(false);

	useEffect(() => {
		display ? setValue("-") : setValue("+");
	}, [display]);

	const items = {
		'Dashboard': {image: dashboard, link: '/'},
		'Orders': {image: order, link: '/orders', items:['In Progress', 'Completed']},
		'Categories': {image: categories, link: '/categories', items:['Men', 'Women', 'Children', 'Sweatshirts', 'Shirts', 'Trousers', 'Shorts', 'Shoes']},
		'Products': {image: products, link: '/products'},
		'My Account': {image: account, link: '/account'},
	};

	return (
		<>
			
			{display && (
				<ul className=" py-2 px-3 text-grey-87 ">
					<li className="flex flex-row">
						<div className="border-l-2 border-b-2 border-grey-87  rounded-b-lg w-10 h-5">
							{" "}
						</div>{" "}
						<p className="-ml-5 bg-grey-22 px-3 hover:bg-red-600 mt-2">
							Men
						</p>
					</li>
					<MenuSelectItem></MenuSelectItem>
					<li className="flex flex-row -mt-5">
						<div className="border-l-2 border-b-2  border-grey-87 rounded-b-lg w-10 h-10">
							{" "}
						</div>
						<div className="-ml-5 bg-grey-22 px-3 hover:bg-red-600 mt-7 self-end h-6 ">
							<p className="leading-none py-1">Men</p>
						</div>
					</li>
					<li className="flex flex-row -mt-5">
						<div className="border-l-2 border-b-2  border-grey-87 rounded-b-lg w-10 h-10">
							{" "}
						</div>
						<div className="-ml-5 bg-grey-22 px-3 hover:bg-red-600 mt-7 self-end h-6 ">
							<p className="leading-none py-1">Men</p>
						</div>
					</li>
					<li className="flex flex-row -mt-5">
						<div className="border-l-2 border-b-2  border-grey-87 rounded-b-lg w-10 h-10">
							{" "}
						</div>
						<div className="-ml-5 bg-grey-22 px-3 hover:bg-red-600 mt-7 self-end h-6 ">
							<p className="leading-none py-1">Men</p>
						</div>
					</li>
				</ul>
			)}
		</>
	);
};
export default MenuItem;
