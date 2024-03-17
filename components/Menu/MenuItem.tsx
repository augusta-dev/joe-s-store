import React from "react";
import MenuSelectItem from "./MenuSelectItem";
import MenuItemHead from "./MenuItemHead";

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
				link={item.length == 0 ? props.link : ""}
			/>
			{display && item.length > 0 && (
				<ul className=" py-2 px-3 text-grey-87 ">
					<li className="flex flex-row">
						<div className="border-l-2 border-b-2 border-grey-87  rounded-b-lg w-10 h-5">
							{" "}
						</div>{" "}
						<p className="-ml-5 bg-grey-22 px-3 hover:bg-grey-67 hover:rounded hover:text-grey-22 mt-2">
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
			{display && item.length == 0 && (
				<ul className=" py-2 px-3 text-grey-87 ">
					<li className="flex flex-row">
						<div className="border-l-2 border-b-2 border-grey-87  rounded-b-lg w-10 h-5">
							{" "}
						</div>{" "}
						<p className="-ml-5 bg-grey-22 px-3 hover:bg-grey-67 hover:rounded hover:text-grey-22 mt-2">
							Loading...
						</p>
					</li>
				</ul>
			)}
		</>
	);
};

export default MenuItem;