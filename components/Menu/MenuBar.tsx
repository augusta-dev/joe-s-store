"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import MenuBarItem from "./MenuBarItem";
import ModalMenu from "./ModalMenu";
import Filters from "../UI/Filters";

import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import heartOutline from "../../assets/heart-outline.svg";
import grid from "../../assets/grid_dots.svg";
import filters from "../../assets/filters.svg";
import { usePathname, useSearchParams } from "next/navigation";

const MenuBar = () => {
	const [showMenu, setShow] = React.useState(false);
	const [showFilters, setFilters] = React.useState(false);
	const pathname = usePathname()
	const path= pathname+'?filters=y'
	console.log(path)
	const searchParams = useSearchParams()
	useEffect(()=>{
		setFilters(!showFilters)
	}, [searchParams])

	return (
		<div className="flex flex-row flex-wrap w-full pt-5 items-center align-middle justify-between">
			{showMenu && (
				<div>
					<button>
						{" "}
						<ModalMenu showing={setShow} />
					</button>
				</div>
			)}
			<div className="w-fit flex items-center align-middle h-fit pl-1">
				<button
					className="leading-none"
					onClick={() => setShow(!showMenu)}
				>
					<Image
						src={grid}
						className=""
						alt=""
					/>{" "}
				</button>
			</div>
			<div className="self-end items-end rounded grid grid-cols-4  w-fit">
				<div className="self-end bg-grey-22 h-10 w-10 items-center flex justify-center rounded-lg ml-[6px]">
					<Image
						src={search}
						alt=""
					></Image>
				</div>
				<MenuBarItem
					link="/cart"
					image={cart}
				/>
				<MenuBarItem
					link="/favourites"
					image={heartOutline}
				/>
				<MenuBarItem
					link={path}
					image={filters}
				/>
			</div>
		</div>
	);
};
export default MenuBar;
