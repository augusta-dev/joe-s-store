"use client";
// import "tailwindcss/tailwind.css";
import React, { useContext, useEffect, useState } from "react";
import Images from "../models/uploadImages";
import { imagesDef } from "../Providers/SubmissionTypes";
import Image from "next/image";
import Sale from "./Sale";
import ListContext from "../Providers/ListContext";

export default function Latest() {
	const [url, setUrl] = useState("");
    const listCtx = useContext(ListContext)

	const getImages = async () => {
		const list = await fetch("/api/get-images");
		const data = await list.json();
        listCtx.setList(data);
		let array: imagesDef = data[data.length - 1].images;
		setUrl(array[array.length - 1].url);
	};

	useEffect(()=>{
		getImages()
	}, [])
	return (
		<>
			<div className="w-full bg-grey-22 rounded-lg h-fit flex flex-row px-3 my-4 py-3">
				<section className="w-[73%] flex flex-col justify-between">
					<div>
						<h1 className="text-3xl font-source font-semibold text-grey-DA leading-6">
							Latest Products
						</h1>
						<h3 className="font-signika -mt-1  font-medium">
							Check out our newest products
						</h3>
					</div>

					<p>Go to new items</p>
				</section>
				<section className="w-[27%]">
					<Image
						src={url}
						className="w-full h-auto"
						width={500}
						height={500}
						alt="latest"
					/>
				</section>
			</div>
			<Sale></Sale>
		</>
	);
}
