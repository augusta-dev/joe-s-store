import React from "react";

const Header:React.FC<{value: string | number}> = (props) => {
	return (
		<div className="w-full justify-center">
			<h1 className="text-grey-D9 text-3xl font-source font-semibold pb-3 ">
				{props.value}
			</h1>
		</div>
	);
}
export default Header
