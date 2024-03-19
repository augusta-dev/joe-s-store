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
				<div className="h-screen fixed z-50 flex flex-col justify-center align-middle items-center  backdrop-opacity-10 backdrop-invert text-center bg-grey-12/60 w-full left-0">
					<Filter onClose={closeDialog}></Filter>
				</div>
			)}
		</>
	);
};

export default Filters;
