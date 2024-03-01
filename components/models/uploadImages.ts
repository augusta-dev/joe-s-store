import mongoose, { Schema } from "mongoose";
const imageSchema = new Schema(
	{
		productName: String,
		brandName: String,
		colorOptions: Object,
		sizeOptions: Object,
		categories: Object,
		initialPrice: Number,
		finalPrice: Number,
		images: Array,
	},
	{ timestamps: true },
);
const Images = mongoose.models.Images || mongoose.model("Images", imageSchema);
export default Images;
