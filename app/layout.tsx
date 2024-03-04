import type { Metadata } from "next";
import "./globals.css";
import Background from "../components/layout/Background";
import Providers from "./Providers";
import "tailwindcss/tailwind.css";
import React from "react";
import localFont from "next/font/local";
import { Athiti, Signika_Negative, Source_Sans_3 } from "next/font/google";

export const metadata: Metadata = {
	title: "Joe's Store",
	description: "An ecommerce store for all your clothing needs.",
};

const athiti = Athiti({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
	variable: "--font-athiti",
});
const signika = Signika_Negative({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-signika",
});

const source = Source_Sans_3({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
	variable: "--font-source",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${athiti.variable} ${signika.variable} ${source.variable}`}
			>
				<main>
					<Providers>
						<Background>{children}</Background>
					</Providers>
				</main>
			</body>
		</html>
	);
}
