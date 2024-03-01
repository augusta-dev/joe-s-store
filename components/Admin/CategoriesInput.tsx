"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import tick from "../../assets/tick.svg";
import { useState } from "react";
import UploadContext from "../Providers/UploadContext";

const CategoriesInput: React.FC<{ value: string }> = (props) => {
	const uploadCtx = useContext(UploadContext);

	const [isClicked, setIsClicked] = useState(false);
	useEffect(() => {
		uploadCtx.setCategories([props.value, isClicked]);
	}, [isClicked]);

	return (
		<div className="w-full rounded-lg p-2 bg-grey-22  text-grey-67 text-left pl-4">
			<button
				onClick={(e) => {
					e.preventDefault();
					setIsClicked(!isClicked);
				}}
				className={`h-6 w-full flex justify-start rounded`}
			>
				{isClicked && (
					<Image
						src={tick}
						alt="tick"
						className="h-5 w-5 ml-2"
					/>
				)}{" "}
				<h2 className=" text-lg font-athiti pl-2">{props.value}</h2>
			</button>
		</div>
	);
};
export default CategoriesInput;
