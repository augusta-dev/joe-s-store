import React, { useReducer, ReactNode, Dispatch } from "react";
import FilterContext, { filters, filtersInit } from './FilterContext';
import { colorsInit, sizesInit, categoriesInit } from "./InitialValues";
import { categoriesDef, colorsDef, sizesDef } from "./SubmissionTypes";

type filterActions = 
    | { type: "CLEAR" }
    | { type: "COLOUR"; colour: [string, boolean] }
    | { type: "SIZE"; size: [string | number, boolean] }
    | { type: "CATEGORY"; category: [string, boolean] }
    | { type: "NUMBER"; number: number}

const filtersReducer = (
	state: filters,
	action: filterActions,
): filters => {

	if (action.type === "CLEAR") {
		return { ...state, color: colorsInit, size: sizesInit, categories: categoriesInit, price: 0};
	}
	if (action.type === "COLOUR") {
		const colours = state.color;
		colours[action.colour[0] as colorsDef] = Boolean(action.colour[1]);
		return { ...state, color: colours };
	}
	if (action.type === "SIZE") {
		const sizes = state.size;
		sizes[action.size[0] as sizesDef] = Boolean(action.size[1]);
		return { ...state, size: sizes };
	}
	if (action.type === "CATEGORY") {
		const categories = state.categories;
		categories[action.category[0] as categoriesDef] = action.category[1];
		return { ...state, categories: categories };
	}

	return state;
};

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [uploadState, dispatchUploadAction]: [
		filters,
		Dispatch<filterActions>,
	] = useReducer(filtersReducer, filtersInit);

	const setColourOptionsHandler = (colour: [string, boolean]) => {
		dispatchUploadAction({ type: "COLOUR", colour: colour });
	};

	const setSizeOptionsHandler = (size: [string | number, boolean]) => {
		dispatchUploadAction({ type: "SIZE", size: size });
	};

	const setCategoriesHandler = (category: [string, boolean]) => {
		dispatchUploadAction({ type: "CATEGORY", category: category });
	};

    const setPriceHandler = (number: number) => {
		dispatchUploadAction({ type: "NUMBER", number: number });
	};

	const clearImagesHandler = () => {
		dispatchUploadAction({ type: "CLEAR" });
	};
    const filterContext: filters = {
		
		color: uploadState.color,
		size: uploadState.size,
		categories: uploadState.categories,
		price: uploadState.price,
        setPrice: uploadState.setPrice,
		setColourOption: setColourOptionsHandler,
		setSizeOption: setSizeOptionsHandler,
		setCategories: setCategoriesHandler,
		clear: clearImagesHandler,
	};

   
    interface ProviderProps<T> {
        value: T;
        children?: ReactNode | undefined;
    }

    return (
        <FilterContext.Provider value={{ filterContext } as unknown as ProviderProps<filters>['value']}>
            {children}
        </FilterContext.Provider>
    );
};