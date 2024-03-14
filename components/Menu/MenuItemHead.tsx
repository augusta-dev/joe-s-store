import React from "react";
import Image from "next/image";

export default function MenuItemHead(props: { heading: string; showing: () => void; display: boolean}) {
	return (
		<div className="flex flex-row justify-between text-grey-87 items-end align-baseline text-end">
			<button onClick={() => props.showing(!props.display)}>
				<div className="flex flex-row ">
					<Image
						src={dashboard}
						alt=""
						className="w-6 mr-4"
					/>
					<h1 className="text-lg font-signika ">Dashboard</h1>
				</div>

				<button className="text-2xl -mt-1">{value}</button>
			</button>
		</div>
	);
}
