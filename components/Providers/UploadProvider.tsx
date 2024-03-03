"use client";
// Import necessary types and modules
import React, { useReducer, ReactNode, Dispatch } from "react";
import UploadContext, { UploadCtxObj } from "./UploadContext";
import {  sizes, categories } from "./InitialValues";
import {
  DetailsObj,
  SizeObj,
  CategoriesObj,
  ImagesObj,
  color,
} from "./SubmissionTypes";
import { colors } from "./SubmissionTypes";

// Define the action types
type UploadAction =
  | { type: "DETAIL"; detail: DetailsObj }
  | { type: "UPLOAD"; images: ImagesObj }
  | { type: "FULL"; images: string[] }
  | { type: "CLEAR" }
  | { type: "COLOUR"; colour: [string, boolean] }
  | { type: "SIZE"; size: [string | number, boolean] }
  | { type: "CATEGORY"; category: [string, boolean] };

// Define the state type
type UploadState = {
  uploadImages: ImagesObj;
  fullImages: string[];
  productName: string;
  brandName: string;
  colorOptions: { [key in colors]: boolean };
  sizeOptions: SizeObj;
  categories: CategoriesObj;
  initialPrice: number;
  finalPrice: number;
};

// Define the reducer function
const uploadReducer = (
  state: UploadState,
  action: UploadAction
): UploadState => {
  console.log(state)
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

    colours[action.colour[0] as colors] = Boolean(action.colour[1]);
    console.log(action.colour);
    return { ...state, colorOptions: colours };
  }
  if (action.type === "SIZE") {
    const sizes = state.sizeOptions;
    sizes[action.size[0] as keyof SizeObj] = action.size[1];
    console.log(sizes);
    return { ...state, sizeOptions: sizes };
  }
  if (action.type === "CATEGORY") {
    const categories = state.categories;
    categories[action.category[0] as keyof CategoriesObj] = action.category[1];
    console.log(categories);
    return { ...state, categories: categories };
  }

  // Handle default case
  return state;
};

// Define the context provider component
type UploadProviderProps = {
  children: ReactNode;
};

const UploadProvider = ({ children }: UploadProviderProps) => {
  //Always initialise the reducer. You have to eother initilise the variable or set it at runtime
  const initialState = {
    fullImages: [''],
	uploadImages: [],
	productName: "",
	brandName: "",
	colorOptions: color,
	sizeOptions: sizes,
	categories: categories,
	initialPrice: 0,
	finalPrice: 0,
  }
  const [uploadState, dispatchUploadAction]: [
    UploadState,
    Dispatch<UploadAction>
  ] = useReducer(uploadReducer, initialState);

  const setDetailHandler = (detail: DetailsObj) => {
    dispatchUploadAction({ type: "DETAIL", detail: detail });
  };

  const setUploadHandler = (images: ImagesObj) =>
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