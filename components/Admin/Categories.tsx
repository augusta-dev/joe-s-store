import React from "react";
import CategoriesInput from "./CategoriesInput";
export default function Categories() {
	return (
		<div className="flex flex-wrap flex-col w-full gap-1 mt-2 justify-start items-start">
			<CategoriesInput value="Men" />
			<CategoriesInput value="Women" />
			<CategoriesInput value="Children" />
			<CategoriesInput value="Sweatshirts" />
			<CategoriesInput value="Sweaters" />
			<CategoriesInput value="Trousers" />
			<CategoriesInput value="Shorts" />
			<CategoriesInput value="Shirts" />
			<CategoriesInput value="Shoes" />
		</div>
	);
}
