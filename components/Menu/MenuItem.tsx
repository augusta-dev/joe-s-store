import React, { useEffect } from "react";
import Image from "next/image";
import MenuSelectItem from "./MenuSelectItem";
import MenuItemHead from "./MenuItemHead";

import dashboard from "../../assets/dashboard.svg";
import order from "../../assets/order.svg";
import categories from "../../assets/categories.svg";
import products from "../../assets/products.svg";
import account from "../../assets/account.svg";

const MenuItem = (props: {
	items: string[];
	heading: string;
	image: string;
	link: string;
	key: string;
}) => {

	let item = props.items;
	const [display, setDisplay] = React.useState(false);

	return (
		<>
			<MenuItemHead
				key={props.heading}
				heading={props.heading}
				image={props.image}
				setDisplay={setDisplay}
			/>
			{display && item.length > 0 && (
				<ul className=" py-2 px-3 text-grey-87 ">
					<li className="flex flex-row">
						<div className="border-l-2 border-b-2 border-grey-87  rounded-b-lg w-10 h-5">
							{" "}
						</div>{" "}
						<p className="-ml-5 bg-grey-22 px-3 hover:bg-red-600 mt-2">
							{props.items[0]}
						</p>
					</li>
					{item.map((name: string, i: number) => {
						if (i > 0)
							return (
								<MenuSelectItem
									key={i}
									name={name}
								></MenuSelectItem>
							);
					})}
				</ul>
			)}
		</>
	);
};

export default MenuItem;

{
	/* <li className="flex flex-row -mt-5">
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
					</li> */
}
