"use client";
// Import necessary types and modules
import React, { useReducer, ReactNode, Dispatch } from "react";
import UploadContext from "./UploadContext";
import { uploadInitialState } from "./InitialValues";
import {
	sizesDef,
	categoriesDef,
	colorsDef,
	imagesDef,
	detailsDef,
} from "./SubmissionTypes";
import { UploadCtxObj, UploadAction, UploadState } from "./uploadTypes";

// Define the reducer function
const uploadReducer = (
	state: UploadState,
	action: UploadAction,
): UploadState => {
	console.log(state);
	if (action.type === "DETAIL") {
		const detail = action.detail;
		return {
			...state,
			productName: detail.pn,
			brandName: detail.bn,
			initialPrice: detail.ip,
			finalPrice: detail.fp,
		};
	}
	if (action.type === "UPLOAD") {
		const currentImages =
			state.uploadImages === undefined ? [] : state.uploadImages;
		const images = currentImages.concat(action.images);
		return { ...state, uploadImages: images };
	}
	if (action.type === "FULL") {
		const currentImages =
			state.fullImages === undefined ? [] : state.fullImages;
		const images = currentImages.concat(action.images);
		return { ...state, fullImages: images };
	}
	if (action.type === "CLEAR") {
		return { ...state, uploadImages: [] };
	}
	if (action.type === "COLOUR") {
		const colours = state.colorOptions;
		console.log(state.colorOptions);

		colours[action.colour[0] as colorsDef] = Boolean(action.colour[1]);
		console.log(action.colour);
		return { ...state, colorOptions: colours };
	}
	if (action.type === "SIZE") {
		const sizes = state.sizeOptions;
		sizes[action.size[0] as sizesDef] = action.size[1];
		console.log(sizes);
		return { ...state, sizeOptions: sizes };
	}
	if (action.type === "CATEGORY") {
		const categories = state.categories;
		categories[action.category[0] as categoriesDef] = action.category[1];
		console.log(categories);
		return { ...state, categories: categories };
	}

	return state;
};

type UploadProviderProps = {
	children: ReactNode;
};

const UploadProvider = ({ children }: UploadProviderProps) => {
	//Always initialise the reducer. You have to either initilise the variable or set it at runtime

	const [uploadState, dispatchUploadAction]: [
		UploadState,
		Dispatch<UploadAction>,
	] = useReducer(uploadReducer, uploadInitialState);

	const setDetailHandler = (detail: detailsDef) => {
		dispatchUploadAction({ type: "DETAIL", detail: detail });
	};

	const setUploadHandler = (images: imagesDef) =>
		dispatchUploadAction({ type: "UPLOAD", images: images });

	const setFullHandler = (images: string[]) =>
		dispatchUploadAction({ type: "FULL", images: images });

	const setColourOptionsHandler = (colour: [string, boolean]) => {
		dispatchUploadAction({ type: "COLOUR", colour: colour });
	};

	const setSizeOptionsHandler = (size: [string | number, boolean]) => {
		dispatchUploadAction({ type: "SIZE", size: size });
	};

	const setCategoriesHandler = (category: [string, boolean]) => {
		dispatchUploadAction({ type: "CATEGORY", category: category });
	};

	const clearImagesHandler = () => {
		dispatchUploadAction({ type: "CLEAR" });
	};

	const uploadContext: UploadCtxObj = {
		fullImages: uploadState.fullImages,
		uploadImages: [uploadState.uploadImages],
		productName: uploadState.productName,
		brandName: uploadState.brandName,
		colorOptions: uploadState.colorOptions,
		sizeOptions: uploadState.sizeOptions,
		categories: uploadState.categories,
		initialPrice: uploadState.initialPrice,
		finalPrice: uploadState.finalPrice,
		setDetails: setDetailHandler,
		setFullImages: setFullHandler,
		setUploadImages: setUploadHandler,
		setColourOption: setColourOptionsHandler,
		setSizeOption: setSizeOptionsHandler,
		setCategories: setCategoriesHandler,
		clearImages: clearImagesHandler,
	};

	return (
		<UploadContext.Provider value={uploadContext}>
			{children}
		</UploadContext.Provider>
	);
};

export default UploadProvider;
