"use client";
import React, { useContext, useState, useEffect } from "react";

export default function UploadButton() {

	const submitContent = (e: React.MouseEvent<HTMLButtonElement>) => {
		
	};

	return (
		<button
			className={` "bg-cyan" : "bg-darkerCyan"
			} mt-16 text-white w-full h-8 rounded-lg`}
			onClick={submitContent}
		>
			Save
		</button>
	);
}
