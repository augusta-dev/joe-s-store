import { categoriesDef, colorsDef, sizesDef } from "./SubmissionTypes";
import { categoriesInit, colorsInit, sizesInit } from "./InitialValues";
import React from "react";

export type filters = {
	color: { [key in colorsDef]: boolean };
	size: { [key in sizesDef]: boolean };
	categories: { [key in categoriesDef]: boolean };
	price: number;
	setColourOption: (option: [string, boolean]) => void;
	setSizeOption: (option: [string | number, boolean]) => void;
	setCategories: (categories: [string, boolean]) => void;
	setPrice: (price: number) => void;
	clear: () => void;
};
export const filtersInit = {
	categories: categoriesInit,
	color: colorsInit,
	size: sizesInit,
	price: 0,
};
const FilterContext = React.createContext<filters>({
	categories: categoriesInit,
	color: colorsInit,
	size: sizesInit,
	price: 0,
	setColourOption: (option: [string, boolean]) => {},
	setSizeOption: (option: [string | number, boolean]) => {},
	setCategories: (categories: [string, boolean]) => {},
	setPrice: (price: number) => {},
	clear: () => {},
});
export default FilterContext;
