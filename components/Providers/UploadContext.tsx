import React from "react";
import { SizeObj, CategoriesObj, DetailsObj, ImagesObj } from "./SubmissionTypes";
import {  sizes, categories } from "./InitialValues";
import { colors, color } from "./SubmissionTypes";

export type UploadCtxObj = {
	fullImages: string[];
	uploadImages: ImagesObj[];
	productName: string;
	brandName: string;
	colorOptions: {[key in colors ]: boolean};
	sizeOptions: SizeObj;
	categories: CategoriesObj;
	initialPrice: number;
	finalPrice: number;
	setDetails: (details: DetailsObj) => void;
	setFullImages: (images: string[]) => void;
	setUploadImages:(images: ImagesObj ) => void;
	setColourOption: (option: [string, boolean]) => void;
	setSizeOption: (option: [string|number, boolean]) => void;
	setCategories: (categories: [string, boolean]) => void;
	clearImages: () => void;
};
const UploadContext = React.createContext<UploadCtxObj>({
	fullImages: [''],
	uploadImages: [],
	productName: "",
	brandName: "",
	colorOptions: color,
	sizeOptions: sizes,
	categories: categories,
	initialPrice: 0,
	finalPrice: 0,
	setDetails: (details: DetailsObj) => {},
	setFullImages: (images: string[]) => {},
	setUploadImages:(images: ImagesObj ) => {},
	setColourOption: (option: [string, boolean]) => {},
	setSizeOption: (option: [string|number, boolean]) => {},
	setCategories: (categories: [string, boolean]) => {},
	clearImages: () => {},
});
export default UploadContext;
