"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import AdminPage from "./Admin";
import AccessDenied from "../UI/AccessDenied";

export default function AdminSignin() {
	const { data: session } = useSession();
	const router = useRouter();

	if (
		session &&
		session.user &&
		session.user.email === "augustan506@gmail.com"
	) {
		return <AdminPage></AdminPage>;
	} else {
		setTimeout(() => {
			router.replace("/signin");
		}, 3000);
		return <AccessDenied data='You do not have access to this page. Sign in as the admin' />;
	}
}
