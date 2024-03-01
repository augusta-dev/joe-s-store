import React from "react";
import Header from "../UI/Header";
export default function SignUp() {
    const avatarOptions = [];

	return (
		<form className="flex items-center justify-center py-6 px-4  flex-col">
			<div className="flex w-36 justify-center items-center align-middle text-center">
				<Header value="Create Account" />
			</div>
		</form>
	);
}
