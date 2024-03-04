import React from "react";
import Image from "next/image";
const ProductDisplay: React.FC<{
	image: string;
	initialprice: number;
	finalPrice: number;
	productName: string;
	brandName: string;
}> = (props) => {
	return (
		<div className="rounded bg-grey-22 h-fit p-3 flex-col">
			<Image
				src={props.image}
				width={500}
				height={500}
				alt=""
			></Image>
			<h1>{props.productName}</h1>
			<h2>{props.brandName}</h2>
			<p>{props.initialprice}</p>
			<p>{props.finalPrice}</p>
		</div>
	);
};
export default ProductDisplay;
