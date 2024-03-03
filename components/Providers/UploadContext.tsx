import React from "react";
import { categoriesDef, detailsDef, imagesDef, colorsDef, sizesDef   } from "./SubmissionTypes";
import {  sizesInit, categoriesInit, colorsInit } from "./InitialValues";
import { UploadCtxObj } from "./uploadTypes";

const UploadContext = React.createContext<UploadCtxObj>({
	fullImages: [''],
	uploadImages: [],
	productName: "",
	brandName: "",
	colorOptions: colorsInit,
	sizeOptions: sizesInit,
	categories: categoriesInit,
	initialPrice: 0,
	finalPrice: 0,
	setDetails: (details: detailsDef) => {},
	setFullImages: (images: string[]) => {},
	setUploadImages:(images: imagesDef ) => {},
	setColourOption: (option: [string, boolean]) => {},
	setSizeOption: (option: [string|number, boolean]) => {},
	setCategories: (categories: [string, boolean]) => {},
	clearImages: () => {},
});
export default UploadContext;
