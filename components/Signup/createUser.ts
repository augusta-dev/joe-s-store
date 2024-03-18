import { signIn } from "next-auth/react";

export const createUser = async (
	username: string,
	email: string,
	password: string,
) => {
	try {
		const response = await fetch("/api/create-user", {
			method: "POST",
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data: { message: string } = await response.json();

		await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		return "Success";
	} catch (error: { message: string } | any | unknown) {
        return 'Error'
    }
};
