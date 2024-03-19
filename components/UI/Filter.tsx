import React from "react";
import Header from "./Header";
import ColourOptions from "../Admin/ColourOptions";

type Props = {
	onClose: () => void;
};

export default function Filter({ onClose }: Props) {
	return (
		<div className="bg-grey-12 px-6 w-full py-6 h-full font-signika flex flex-col justify-between text-grey-D9">
			<div>
				<Header value={"Filters"}></Header>
				<h2 className="text-start text-xl">Price</h2>
				<div className="grid grid-cols-2  gap-3 rounded  items-center justify-center">
					<input
						type="number"
						className="bg-grey-22 h-9 rounded px-3 outline-none"
						placeholder="min"
						min={0}
					/>
					<input
						type="number"
						className="bg-grey-22 h-9 rounded px-3 outline-none"
						placeholder="max"
						min={0}
					/>
				</div>

				<h2 className="text-start text-xl text-grey-D9 mt-2">Colour</h2>
				<ColourOptions className="justify-between"></ColourOptions>
			</div>

			<div className="w-full gap-2 grid grid-cols-2">
                <button className="bg-grey-22 py-[6px] rounded" onClick={onClose}>
                    Cancel
                </button>
                <button className="bg-grey-C3 rounded text-grey-22">
                    Apply
                </button>
            </div>
		</div>
	);
}
