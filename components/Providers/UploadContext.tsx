import React from "react";
const UploadContext = React.createContext({
	images: [],
	productName: "",
	brandName: "",
	colorOptions: "",
	sizeOptions: "",
	initialPrize: "",
	finalPrize: "",
	setDetails: (details) => {},
	setImages: (images) => {},
});
export default UploadContext;
