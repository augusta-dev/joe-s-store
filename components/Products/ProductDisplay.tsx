import React from "react";
import Image from "next/image";
import heartFilled from "../../assets/heart_filled.svg";
const ProductDisplay: React.FC<{
	image: string;
	initialprice: number;
	finalPrice: number;
	productName: string;
	brandName: string;
}> = (props) => {
	return (
		<div className="rounded-lg relative bg-grey-22 h-fit p-3 flex-col w-full font-athiti z-10">
			<Image
				src={heartFilled}
				className="float-right"
				alt=""
			></Image>
			<Image
				src={props.image}
				width={500}
				height={500}
				alt=""
				className="px-6"
			></Image>
			<h1 className="text-grey-DA text-lg font-medium">{props.productName}</h1>
			<h2 className="font-signika leading-3 font-light">{props.brandName}</h2>
			<div>
				<p className="inline text-grey-DA pr-2 text-sm">${props.initialprice}</p>
				<p className="inline line-through decoration-[1.2px] text-xs">${props.finalPrice}</p>
			</div>

			<button className="float-right -mt-6 -mr-3 -mb-3 bg-grey-DA s text-2xl font-medium p-3 leading-3 rounded-tl-lg rounded-br-lg text-grey-22">+</button>
		</div>
	);
};
export default ProductDisplay;
