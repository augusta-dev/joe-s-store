import React from "react";

export default function MenuSelectItem(props: { name: string }) {
	return (
		<li className="flex flex-row -mt-5">
			<div className="border-l-2 border-b-2 border-grey-87   rounded-b-lg w-10 h-10">
				{" "}
			</div>
			<div className="-ml-5 bg-grey-22 px-3 hover:bg-grey-67 hover:rounded hover:text-grey-22 mt-7 self-end h-6 w-full ">
				<p className="leading-none py-1">{props.name}</p>
			</div>
		</li>
	);
}
