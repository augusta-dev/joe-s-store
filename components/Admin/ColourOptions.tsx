import React from "react";
import "./colour-options.css";
import ColourInput from "./ColourInput";

export default function ColourOptions() {
	const colours = [
		{ value: "black", className: "bg-black" },
		{ value: "white", className: "bg-white" },
		{ value: "gray", className: "bg-gray-600" },
		{ value: "brown", className: "bg-orange-950" },
		{ value: "red", className: "bg-[rgb(255,0,0)]" },
		{ value: "orange", className: "bg-orange-600" },
		{ value: "yellow", className: "bg-yellow-400" },
		{ value: "lime", className: "bg-lime-500" },
		{ value: "green", className: "bg-green-500" },
		{ value: "emerald", className: "bg-emerald-500" },
		{ value: "teal", className: "bg-teal-500" },
		{ value: "cyan", className: "bg-cyan-500" },
		{ value: "sky", className: "bg-sky-500" },
		{ value: "blue", className: "bg-blue-6" },
		{ value: "indigo", className: "bg-indigo-700" },
		{ value: "purple", className: "bg-purple-800" },
		{ value: "fuchsia", className: "bg-fuchsia-700" },
		{ value: "pink", className: "bg-pink-600" },
	];
	return (
		<div className="flex flex-wrap flex-row w-full gap-2 mt-2 justify-start items-start">
			{colours.map(({ value, className }, index) => (
				<ColourInput
					key={index}
					value={value}
					className={className}
				/>
			))}
		</div>
	);
}
