"use client";
import React, { useContext, useEffect, useState } from "react";
import ListContext from "../Providers/ListContext";
import ProductDisplay from "../UI/ProductDisplay";
import { imagesDef } from "../Providers/SubmissionTypes";
import { list } from "../Providers/ListContext";
export default function Sale() {
	const listCtx = useContext(ListContext);
	const [saleList, setSaleList] = useState<list>([]);

	useEffect(() => {
		let tempList: list = [];
		for (let i = 1; i < 11; i++) {
			tempList.push(listCtx.list[listCtx.list.length - i]);
		}
		setSaleList(tempList);
	}, [listCtx.list]);

	console.log(saleList)

	return (
		<div className="mb-5 z-20">
			<h1 className="text-grey-DA font-signika text-lg">Sale</h1>
			<div className=" grid w-full grid-cols-2 gap-2 z-20">
			{saleList.every(item => item !== undefined) &&
				saleList.map((item) => (
					<ProductDisplay
						key={item._id}
						image={item.images[0].url}
						initialprice={item.initialPrice}
						finalPrice={item.finalPrice}
						productName={item.productName}
						brandName={item.brandName}
					></ProductDisplay>
				))}
			</div>
			
		</div>
	);
}
