import React from "react";

export default function Input(props) {
	return (
		<>
			<input
				type={props.type}
				placeholder={props.placeholder}
				className="bg-grey-22 h-12 w-full text-grey-67 placeholder:text-grey-67 rounded-lg mt-2 px-6 font-athiti font-medium text-lg focus:outline-none focus:bg-grey-22 active:bg-grey-22  focus-visible:bg-grey-22 hover:bg-grey-22 outline-none boder-none"
				onChange={props.onChange}
				onMouseOver={props.onMouseOver}
				onMouseOut={props.onMouseOut}
				id={props.id}
				value={props.value}
			/>
		</>
	);
}
