"use client";
import { useReducer } from "react";
import React from "react";
import UploadContext from "./UploadContext";

const uploadReducer = (state, action) => {
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
	if (action.type === "IMAGES") {
		const currentImages = state.images == undefined ? [] : state.images;
		const images = currentImages.concat(action.images);
		return { ...state, images: images };
	}
	if (action.type === "CLEAR") {
		return { ...state, images: [] };
	}
	if (action.type === "COLOUR") {
		const colours =
			state.colorOptions == undefined ? {} : state.colorOptions;
		colours[action.colour[0]] = action.colour[1];
		console.log(colours);
		return { ...state, colorOptions: colours };
	}
	if (action.type === "SIZE") {
		const sizes = state.sizeOptions == undefined ? {} : state.sizeOptions;
		sizes[action.size[0]] = action.size[1];
		console.log(sizes);
		return { ...state, sizeOptions: sizes };
	}
	if (action.type === "CATEGORY") {
		const categories =
			state.categories == undefined ? {} : state.categories;
		categories[action.category[0]] = action.category[1];
		console.log(categories);
		return { ...state, categories: categories };
	}
};

const UploadProvider = (props) => {
	const [uploadState, dispatchUploadAction] = useReducer(uploadReducer, {});

	const setDetailHandler = (detail) => {
		dispatchUploadAction({ type: "DETAIL", detail: detail });
	};

	const setImagesHandler = (images) =>
		dispatchUploadAction({ type: "IMAGES", images: images });
	const setColourOptionsHandler = (colour) => {
		dispatchUploadAction({ type: "COLOUR", colour: colour });
	};
	const setSizeOptionsHandler = (size) => {
		dispatchUploadAction({ type: "SIZE", size: size });
	};
	const setCategoriesHandler = (category) => {
		dispatchUploadAction({ type: "CATEGORY", category: category });
	};
	const clearImagesHandler = () => {
		dispatchUploadAction({ type: "CLEAR" });
	};

	const uploadContext = {
		images: uploadState.images,
		productName: uploadState.productName,
		brandName: uploadState.brandName,
		colorOptions: uploadState.colorOptions,
		sizeOptions: uploadState.sizeOptions,
		categories: uploadState.categories,
		initialPrice: uploadState.initialPrice,
		finalPrice: uploadState.finalPrice,
		setDetails: setDetailHandler,
		setImages: setImagesHandler,
		setColourOption: setColourOptionsHandler,
		setSizeOption: setSizeOptionsHandler,
		setCategories: setCategoriesHandler,
		clearImages: clearImagesHandler,
	};

	return (
		<UploadContext.Provider value={uploadContext}>
			{props.children}
		</UploadContext.Provider>
	);
};

export default UploadProvider;
