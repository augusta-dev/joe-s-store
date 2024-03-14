"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import ModalMenu from "./ModalMenu";

import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import heartOutline from "../../assets/heart-outline.svg";
import grid from "../../assets/grid_dots.svg";

const MenuBar = () => {
	const [showMenu, setShow] = React.useState(false);

	return (
		<div className="flex flex-row flex-wrap w-full pt-5 items-center align-middle justify-between">
			{showMenu && (
				<div>
					<button>
						{" "}
						<ModalMenu showing={setShow}></ModalMenu>
					</button>
					<p>i</p>
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
			<div className="self-end items-end rounded grid grid-cols-3  w-fit">
				<div className="self-end bg-grey-22 h-10 w-10 items-center flex justify-center rounded-lg ml-[6px]">
					<Image
						src={search}
						alt=""
					></Image>
				</div>
				<div className="self-end bg-grey-22 h-10 w-10 items-center flex justify-center rounded-lg ml-[6px]">
					<Link href="/cart">
						<Image
							src={cart}
							alt=""
						></Image>
					</Link>
				</div>
				<div className="self-end bg-grey-22 h-10 w-10 items-center flex justify-center rounded-lg ml-[6px]">
					<Link href="/favourites">
						{" "}
						<Image
							src={heartOutline}
							alt=""
						></Image>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default MenuBar;
