"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import tick from "../../assets/tick.svg";
import { useState } from "react";
import UploadContext from "../Providers/UploadContext";
const SizeInput: React.FC<{ value: string | number; className?: string }> = (
	props,
) => {
	const uploadCtx = useContext(UploadContext);

	const [isClicked, setIsClicked] = useState<boolean>(false);
	useEffect(() => {
		uploadCtx.setSizeOption([props.value, isClicked]);
	}, [isClicked]);

	return (
		<div className="w-fit rounded-lg p-2 bg-grey-22">
			<button
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
					e.preventDefault();
					setIsClicked(!isClicked);
				}}
				type="submit"
				className={`${props.className} font-semibold font-athiti text-grey-67 text-2xl h-10 w-10 flex justify-center items-center rounded`}
			>
				{props.value}
				{isClicked && (
					<Image
						src={tick}
						alt="tick"
						className="absolute h-5 w-5"
					/>
				)}
			</button>
		</div>
	);
};
export default SizeInput;
