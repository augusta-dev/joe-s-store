import Link from "next/link";
import Image from "next/image";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import heartOutline from "../../assets/heart-outline.svg";
const MenuBar = () => {
	return (
		<div className="flex flex-row flex-wrap w-full pt-5 ">
			<div className="w-[65%]"></div>
			<div className="self-end items-end right float-right rounded flex justify-between w-[35%]">
				<div className="self-end bg-grey-22 h-10 w-10 items-center flex justify-center rounded-lg">
					<Image
						src={search}
						alt=""
					></Image>
				</div>
			<div className="self-end bg-grey-22 h-10 w-10 items-center flex justify-center rounded-lg">
					<Link href="/cart">
						<Image
							src={cart}
							alt=""
						></Image>
					</Link>
				</div>
				<div className="self-end bg-grey-22 h-10 w-10 items-center flex justify-center rounded-lg">
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
