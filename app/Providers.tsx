"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import ListProvider from "@/components/Providers/ListProvider";

const Providers: React.FC<{ children: ReactNode }> = (props) => {
	return (
		<SessionProvider>
			<ListProvider>{props.children}</ListProvider>
		</SessionProvider>
	);
};

export default Providers;
