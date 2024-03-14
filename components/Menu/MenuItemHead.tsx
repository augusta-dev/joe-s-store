import React from "react";
import Image from "next/image";
import { useEffect } from "react";

export default function MenuItemHead(props: {
	heading: string;
	image: string;
	setDisplay: (display: boolean) => void;
}) {
	const [value, setValue] = React.useState("+");
	const [display, setDisplay] = React.useState(false);

	useEffect(() => {
		display ? setValue("-") : setValue("+");
		props.setDisplay(display);
	}, [display]);

	return (
		<button
			onClick={() => setDisplay(!display)}
			className="flex flex-row justify-between text-grey-87 items-end align-baseline text-end w-full pt-2"
		>
			<div className="flex flex-row ">
				<Image
					src={props.image}
					alt=""
					className="w-6 mr-4"
				/>
				<h1 className="text-lg font-signika ">{props.heading}</h1>
			</div>

			<button className="text-2xl -mt-1">{value}</button>
		</button>
	);
}
