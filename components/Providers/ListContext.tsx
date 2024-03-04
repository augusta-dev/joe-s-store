import { categoriesInit, colorsInit, sizesInit } from "./InitialValues";
import {
	categoriesDef,
	colorsDef,
	imagesDef,
	sizesDef,
} from "./SubmissionTypes";
import React from "react";

export type list = {
	brandName: string;
	categories: { [key in categoriesDef]: boolean };
	colorOptions: { [key in colorsDef]: boolean };
	createdAt: string;
	finalPrice: number;
	images: imagesDef;
	initialPrice: number;
	productName: string;
	sizeOptions: { [key in sizesDef]: boolean };
	updatedAt: string;
	__v: number;
	_id: string;
}[];
export const listInit: list = [
	{
		brandName: "",
		categories: categoriesInit,
		colorOptions: colorsInit,
		createdAt: "",
		finalPrice: 0,
		images: [],
		initialPrice: 0,
		productName: "",
		sizeOptions: sizesInit,
		updatedAt: "",
		__v: 0,
		_id: "",
	},
];
const ListContext = React.createContext({
	list: listInit,
    setList: (list: list) => {}
});
export default ListContext;