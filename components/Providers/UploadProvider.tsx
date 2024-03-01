'use client'
// Import necessary types and modules
import React, { useReducer, ReactNode, Dispatch } from "react";
import UploadContext, {UploadCtxObj} from "./UploadContext";
import {  DetailsObj, ColourObj, SizeObj, CategoriesObj, ImagesObj } from "./SubmissionTypes";

// Define the action types
type UploadAction =
  | { type: "DETAIL"; detail: DetailsObj }
  | { type: "IMAGES"; images: ImagesObj | string[] }
  | { type: "CLEAR" }
  | { type: "COLOUR"; colour: [string, boolean] }
  | { type: "SIZE"; size: [string|number, boolean] }
  | { type: "CATEGORY"; category: [string, boolean] };

// Define the state type
type UploadState = {
  images: string[];
  productName: string;
  brandName: string;
  colorOptions: ColourObj;
  sizeOptions: SizeObj;
  categories: CategoriesObj;
  initialPrice: number;
  finalPrice: number;
};

// Define the reducer function
const uploadReducer = (state: UploadState, action: UploadAction): UploadState => {
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
    const currentImages = state.images === undefined ? [] : state.images;
    const images = currentImages.concat(action.images);
    return { ...state, images: images };
  }
  if (action.type === "CLEAR") {
    return { ...state, images: [] };
  }
  if (action.type === "COLOUR") {
    const colours: ColourObj = state.colorOptions;
    colours[action.colour[0]] = action.colour[1];
    console.log(colours);
    return { ...state, colorOptions: colours };
  }
  if (action.type === "SIZE") {
    const sizes = state.sizeOptions;
    sizes[action.size[0]] = action.size[1];
    console.log(sizes);
    return { ...state, sizeOptions: sizes };
  }
  if (action.type === "CATEGORY") {
    const categories = state.categories ;
    categories[action.category[0]] = action.category[1];
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
  const [uploadState, dispatchUploadAction]: [
    UploadState,
    Dispatch<UploadAction>
  ] = useReducer(uploadReducer, {});

  const setDetailHandler = (detail: DetailsObj) => {
    dispatchUploadAction({ type: "DETAIL", detail: detail });
  };

  const setImagesHandler = (images: ImagesObj | string[]) =>
    dispatchUploadAction({ type: "IMAGES", images: images });

  const setColourOptionsHandler = (colour: [string, boolean]) => {
    dispatchUploadAction({ type: "COLOUR", colour: colour });
  };

  const setSizeOptionsHandler = (size: [string|number, boolean]) => {
    dispatchUploadAction({ type: "SIZE", size: size });
  };

  const setCategoriesHandler = (category: [string, boolean]) => {
    dispatchUploadAction({ type: "CATEGORY", category: category });
  };

  const clearImagesHandler = () => {
    dispatchUploadAction({ type: "CLEAR" });
  };

  const uploadContext: UploadCtxObj = {
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
      {children}
    </UploadContext.Provider>
  );
};

export default UploadProvider;
