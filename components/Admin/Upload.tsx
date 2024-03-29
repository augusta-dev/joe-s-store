"use client";
import React from "react";
import UploadButton from "../UI/uploadthing.ts"; 
import { useState, useEffect, useContext } from "react";
import UploadContext from "../Providers/UploadContext";
import { imagesDef } from "../Providers/SubmissionTypes";
export default function Upload() {
	const [totalImages, setTotalImages] = useState<imagesDef>([]);
	const uploadCtx = useContext(UploadContext);
	useEffect(() => {
		uploadCtx.setUploadImages(totalImages);
	}, [totalImages]);
	const [errorMessage, setErrorMessage] = useState("")

	return (
		<>
			<UploadButton
				endpoint="imageUploader"
				onClientUploadComplete={(res) => {
					const newImages = res.map((response) => ({
						key: response.key,
						url: response.url,
					}));
					setTotalImages([...newImages]);
					setErrorMessage("")
					console.log("Files: ", res, totalImages);
				}}
				onUploadError={(error) => {
					console.log("Error: ", error.code);
					if(error.code == "INTERNAL_SERVER_ERROR"){
						setErrorMessage("Please Check Your Internet Connection")
					}
				}}
			/>
			{errorMessage && <p className="text-red-500">{errorMessage}</p>}
		</>
	);
}
