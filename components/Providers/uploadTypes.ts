import {
	categoriesDef,
	detailsDef,
	imagesDef,
	colorsDef,
	sizesDef,
} from "./SubmissionTypes";

export type UploadCtxObj = {
	fullImages: string[];
	uploadImages: imagesDef[];
	productName: string;
	brandName: string;
	colorOptions: { [key in colorsDef]: boolean };
	sizeOptions: { [key in sizesDef]: boolean };
	categories: { [key in categoriesDef]: boolean };
	initialPrice: number;
	finalPrice: number;
	setDetails: (details: detailsDef) => void;
	setFullImages: (images: string[]) => void;
	setUploadImages: (images: imagesDef) => void;
	setColourOption: (option: [string, boolean]) => void;
	setSizeOption: (option: [string | number, boolean]) => void;
	setCategories: (categories: [string, boolean]) => void;
	clearImages: () => void;
};
export type UploadAction =
  | { type: "DETAIL"; detail: detailsDef }
  | { type: "UPLOAD"; images: imagesDef }
  | { type: "FULL"; images: string[] }
  | { type: "CLEAR" }
  | { type: "COLOUR"; colour: [string, boolean] }
  | { type: "SIZE"; size: [string | number, boolean] }
  | { type: "CATEGORY"; category: [string, boolean] };

export type UploadState = {
  uploadImages: imagesDef;
  fullImages: string[];
  productName: string;
  brandName: string;
  colorOptions: { [key in colorsDef]: boolean };
  sizeOptions: {[key in sizesDef ]: boolean};
  categories: {[key in categoriesDef ]: boolean};
  initialPrice: number;
  finalPrice: number;
};
