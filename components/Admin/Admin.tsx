"use client";
import Image from "next/image";
import Input from "../UI/Input";
import Upload from "./Upload";
import UploadContext from "../Providers/UploadContext";
import ColourOptions from "./ColourOptions";
import SizeOptions from "./SizeOptions";
import avatar from "../../assets/gamer.png";
import { useContext, useState, useEffect } from "react";
import cross from "../../assets/cross.svg";
import { signOut, useSession } from "next-auth/react";
import Categories from "./Categories";
import AccessDenied from "../UI/AccessDenied";
import Link from "next/link";
import Header from "../UI/Header";
import Button from "../UI/Button";

const AdminPage: React.FC = (props) => {
	const UploadCtx = useContext(UploadContext);
	const images = UploadCtx.uploadImages;
	const co = UploadCtx.colorOptions;
	const { data: session } = useSession();
	const [isFull, setIsFull] = useState<boolean>(false);
	const [showCO, setShowCO] = useState<boolean>(false);
	const [showSO, setShowSO] = useState<boolean>(false);
	const [showCat, setShowCat] = useState<boolean>(false);
	const [error, setError] = useState("");
	const [details, setDetails] = useState({
		pn: "",
		bn: "",
		ip: 0,
		fp: 0,
	});
	const detailsArray = Object.values(details);
	useEffect(() => {
		const boolean: boolean[] = [];
		detailsArray.forEach((detail) => {
			if (typeof detail == "string") boolean.push(detail.length !== 0);
		});
		const allTrue = boolean.every((val) => val === true);
		if (images !== undefined) {
			images.length > 0 && setIsFull(allTrue);
		}
	}, [details, images, co, UploadCtx.sizeOptions]);

	const clearall = () => {
		setDetails({ pn: "", bn: "", ip: 0, fp: 0 });
		setIsFull(false);
		setShowCO(false);
		setShowSO(false);
		setShowCat(false);
		UploadCtx.clearImages();
	};

	const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (images.length > 0 && co && isFull) {
			UploadCtx.setDetails(details);
			sendImages();
			clearall();
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};
	const sendImages = async () => {
		try {
			const response = await fetch("/api/image-upload", {
				method: "POST",
				body: JSON.stringify({
					productName: details.pn,
					brandName: details.bn,
					colorOptions: UploadCtx.colorOptions,
					sizeOptions: UploadCtx.sizeOptions,
					categories: UploadCtx.categories,
					initialPrice: details.ip,
					finalPrice: details.fp,
					images: images,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data: { message: string } = await response.json();
			setError("Data uploaded!");
		} catch (error: { message: string } | any | unknown) {
			setError("Error uploading data!");
		}
	};

	const signout = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		signOut();
	};

	// if (
	// 	session &&
	// 	session.user &&
	// 	session.user.email === "augustan506@gmail.com"
	// ) {
	return (
		<form className="flex items-center justify-center py-6  flex-col">
			<div className="flex w-36 justify-center items-center align-middle text-center">
				<Header value="Enter Data" />
				<button
					type="submit"
					onClick={(e) => {
						signout(e);
					}}
					className="w-fit absolute mb-2 ml-[calc(85%-20px)]"
				>
					{" "}
					<Image
						src={cross}
						className="w-5 h-5"
						alt="cross"
					></Image>
				</button>
			</div>
			<Image
				src={avatar}
				className="self-center h-20 w-20 my-1"
				alt="avatar"
			></Image>
			<Upload />
			<p className="-mt-1 italic font-athiti">
				To avoid repetition, you can view all images{" "}
				<Link
					href="/images"
					className="hover:underline"
				>
					here
				</Link>
			</p>
			{error && <p className="text-white my-2">{error}</p>}
			<Input
				placeholder="Product Name"
				type="text"
				value={details.pn}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setDetails({ ...details, pn: e.target.value });
				}}
			/>
			<Input
				placeholder="Brand Name"
				type="text"
				value={details.bn}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setDetails({ ...details, bn: e.target.value });
				}}
			/>
			<Button
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
					e.preventDefault();
					setShowCO(!showCO);
				}}
			>
				Colour Options
			</Button>
			{showCO && <ColourOptions />}
			<Button
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
					e.preventDefault();
					setShowSO(!showSO);
				}}
			>
				Size Options
			</Button>
			{showSO && <SizeOptions />}
			<Button

				onClick={(e) => {
					e.preventDefault();
					setShowCat(!showCat);
				}}
			>
				Categories
			</Button>

			{showCat && (
				<>
					<p className="text-left font-athithi font-thin text-base text-grey-67 italic mt-1 w-full">
						Please select all applicable categories!
					</p>{" "}
					<Categories />
				</>
			)}

			<Input
				placeholder="Initial Price in Naira"
				type="number"
				value={details.ip != 0 ? details.ip : ""}
				onChange={(e) => {
					setDetails({
						...details,
						ip: parseInt(e.target.value),
					});
				}}
			/>
			<Input
				placeholder="Final Price in Naira"
				type="number"
				value={details.fp != 0 ? details.fp : ""}
				onChange={(e) => {
					setDetails({
						...details,
						fp: parseInt(e.target.value),
					});
				}}
			/>

			<Button
				onClick={(e) => {
					submitHandler(e);
				}}
				className={`${
					isFull ? "bg-grey-D9" : "bg-grey-67"
				} rounded-lg mt-16 text-grey-12 text-2xl font-medium`}
			>
				Save
			</Button>
		</form>
	);
	// } else {
	// 	return <AccessDenied data='You do not have access to this page!' />;
	// }
};
export default AdminPage;
