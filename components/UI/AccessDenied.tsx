import React from "react";
import warning from "../../assets/warning.svg";
import Image from "next/image";

export default function AccessDenied() {
	return (
		<div className="flex flex-col wrap justify-center align-middle items-center h-[calc(100dvh-176px)]">
			<Image
				src={warning}
				className="w-36 h-36"
				alt="warning"
			></Image>
			<p className=" text-grey-67 pt-6 text-lg font-athiti ">
				You do not have access to this page!
			</p>
		</div>
	);
}
