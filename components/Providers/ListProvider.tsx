"use client";
import { Children, ReactNode, useState } from "react";
import ListContext, { list, listInit } from "./ListContext";
import { categoriesInit, colorsInit, sizesInit } from "./InitialValues";

const ListProvider: React.FC<{ children: ReactNode }> = (props) => {
	const [list, setList] = useState<list>(listInit);
	const setListHandler = (data: list) => {
		setList(data);
	};
	const listContext = {
		list: list,
		setList: setListHandler,
	};

	return (
		<ListContext.Provider value={listContext}>
			{props.children}
		</ListContext.Provider>
	);
};

export default ListProvider