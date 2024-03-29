import mongoose from "mongoose";
async function connectMongo() {
	try {
		process.env.MONGODB_URI !== undefined &&
			(await mongoose.connect(process.env.MONGODB_URI));
		console.log("Connected to mongodb successful");
	} catch (e) {
		throw new Error("Error connecting to Mongo");
	}
}
export default connectMongo;
