"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Filter from "./Filter";

const Filters = () => {
	const searchParams = useSearchParams();
	const showFilters = searchParams.get("filters");
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		console.log(router);
		if (showFilters == "y") {
			setIsOpen(true);
		}
		console.log(showFilters, isOpen);
	}, [showFilters]);

	const closeDialog = () => {
		router.push(pathname);
		setIsOpen(false);
	};

	const clickOk = () => {
		//onOk()
		closeDialog();
	};

	return (
		<>
			{isOpen && (
				<div className="h-screen fixed z-50 flex justify-center align-middle items-center w-full backdrop-opacity-10 backdrop-invert bg-grey-12/60 left-0">
					<Filter onClose={closeDialog}></Filter>
				</div>
			)}
		</>
	);
};

export default Filters;
