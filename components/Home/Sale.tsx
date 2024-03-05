"use client";
import React, { useContext, useEffect, useState } from "react";
import ListContext from "../Providers/ListContext";
import ProductDisplay from "../Products/ProductDisplay";
import { imagesDef } from "../Providers/SubmissionTypes";
export default function Sale() {
	const listCtx = useContext(ListContext);

	const [images, setImages] = useState<imagesDef>([]);
	const [url, setUrl] = useState<string[]>([""]);

	listCtx.list.forEach((el) => {
		const images = el.images;

		console.log(images);
		setImages([...images, ...el.images]);
	});

	// useEffect(() => {
	// 	images.forEach((image) => {});
	// });

	// const url = images.reduce((acc,ini) => {
	// 	acc.concat(ini.images)
	// 	return acc
	// })
	// 8\
	return (
		<div>
			<h1 className="text-grey-DA font-signika text-lg">Sale</h1>
			<ProductDisplay
				image=""
				initialprice={3}
				finalPrice={1}
				productName=""
				brandName=""
			></ProductDisplay>
		</div>
	);
}
