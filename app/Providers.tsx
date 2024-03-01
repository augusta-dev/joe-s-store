"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const Providers: React.FC<{ children: ReactNode }> = (props) => {
	return <SessionProvider>{props.children}</SessionProvider>;
};

export default Providers;
