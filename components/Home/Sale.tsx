"use client";
import React, { useContext } from "react";
import ListContext from "../Providers/ListContext";
import ProductDisplay from "../Products/ProductDisplay";
export default function Sale() {
	const listCtx = useContext(ListContext);
    console.log(listCtx)
	return (
		<div>
			<h1 className="text-grey-DA font-signika text-lg">Sale</h1>
            <ProductDisplay image="" initialprice={3} finalPrice={1} productName="" brandName=""></ProductDisplay>
		</div>
	);
}
