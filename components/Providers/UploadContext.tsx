import React from "react";
import { SizeObj, ColourObj, CategoriesObj, DetailsObj, ImagesObj } from "./SubmissionTypes";
import { colors, sizes, categories } from "./InitialValues";

export type UploadCtxObj = {
	images: string[];
	productName: string;
	brandName: string;
	colorOptions: ColourObj;
	sizeOptions: SizeObj;
	categories: CategoriesObj;
	initialPrice: number;
	finalPrice: number;
	setDetails: (details: DetailsObj) => void;
	setImages: (images: ImagesObj) => void;
	setColourOption: (option: [string, boolean]) => void;
	setSizeOption: (option: [string|number, boolean]) => void;
	setCategories: (categories: [string, boolean]) => void;
	clearImages: () => void;
};
const UploadContext = React.createContext<UploadCtxObj>({
	images: [''],
	productName: "",
	brandName: "",
	colorOptions: colors,
	sizeOptions: sizes,
	categories: categories,
	initialPrice: 0,
	finalPrice: 0,
	setDetails: (details: DetailsObj) => {},
	setImages: (images: ImagesObj) => {},
	setColourOption: (option: [string, boolean]) => {},
	setSizeOption: (option: [string|number, boolean]) => {},
	setCategories: (categories: [string, boolean]) => {},
	clearImages: () => {},
});
export default UploadContext;
