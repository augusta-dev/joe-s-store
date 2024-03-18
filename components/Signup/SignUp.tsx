//create a signin page using ref in react
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Header from "../UI/Header";
import Input from "../UI/Input";
import Button from "../UI/Button";
import signup from "../../assets/signup2.svg";
import { useRouter } from "next/navigation";
import { createUser } from "./createUser";

export default function SignUp() {
	const [username, setUserName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isFull, setIsFull] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		username.length > 0 && email.length > 0 && password.length > 0
			? setIsFull(true)
			: setIsFull(false);
	});
	const [error, setError] = useState<{
		color: string;
		message: string;
	}>({ color: "", message: "" });

	const create_user = async () => {
		const response = await createUser(username, email, password);
		if (response == "Success") {
			setError({
				color: "bg-green-6",
				message: "Signup Successful",
			});
			router.replace("/");
		} else {
			setError({
				color: "bg-red-6",
				message: "Error Uploading Credentials",
			});
		}
	};

	return (
		<form className="flex items-end justify-between py-6 flex-col min-h-[calc(100vh-176px)]">
			<div className="flex flex-col w-full items-center">
				<div className="flex w-36 justify-center items-center align-middle text-center mb-2">
					<Header value="Create Account" />
				</div>
				<Image
					src={signup}
					alt=""
					className="bg-grey-22 p-5 w-20 rounded-lg"
				/>
				<Input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<Input
					type="email"
					placeholder="Email Address"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<Input
					type="text"
					placeholder="Password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				{error && (
					<div
						className={`${error.color} text-lg text-semibold font-athiti text-grey-22 mt-2 w-full text-center h-12  rounded-lg items-center flex`}
					>
						<h2 className="w-full h-fit py-auto self-center ">
							{error.message}
						</h2>
					</div>
				)}
			</div>

			<Button
				onClick={(e) => {
					e.preventDefault();
					isFull && create_user();
				}}
				className={`${
					isFull ? "!bg-grey-D9" : "!bg-grey-67"
				}  !text-grey-12 text-xl text-center font-medium mb-2 `}
			>
				Save
			</Button>
		</form>
	);
}
