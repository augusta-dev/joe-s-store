import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MenuBarItem(props: {
	image: string;
	link?: string;
	onClick?: () => void;
}) {
	return (
		<button
			className="self-end bg-grey-22 h-10 w-10 items-center flex justify-center rounded-lg ml-[6px]"
			onClick={props.onClick}
		>
			<Link href={props.link ? props.link : "/"}>
				<Image
					src={props.image}
					alt=""
				></Image>
			</Link>
			{}
		</button>
	);
}
