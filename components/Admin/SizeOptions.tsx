import React from "react";
import "./colour-options.css";
import SizeInput from "./SizeInput";

export default function ColourOptions() {
	// const sizes = {
	// 	values: ["4XL", "3XL", "2XL", "XL", "L", "M", "S", "XS", "XXS"],
	// 	numbers: [
	// 		33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
	// 		50,
	// 	],
	// };
	const sizes = [
		33,
		34,
		35,
		36,
		37,
		38,
		39,
		40,
		41,
		42,
		43,
		44,
		45,
		46,
		47,
		48,
		49,
		50,
		"4XL",
		"3XL",
		"2XL",
		"XL",
		"L",
		"M",
		"S",
		"XS",
		"XXS",
	];
	return (
		<div className="flex flex-wrap flex-row w-full gap-2 mt-2 justify-start font-athiti text-grey-67 italic">
			{sizes.map((value) => (
				<SizeInput
					value={value}
					key={value}
				></SizeInput>
			))}
			
		</div>
	);
}
