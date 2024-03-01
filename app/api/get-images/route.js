import { NextResponse } from "next/server";
import connectMongo from "../../../components/libs/mongodb";
import Images from "../../../components/models/uploadImages";

export async function GET() {
	try {
		await connectMongo();
		const list = await Images.find();
		return new NextResponse(JSON.stringify(list), { status: 200 });
	} catch (error) {
		return new NextResponse("Error in fetching list" + error, {
			status: 501,
		});
	}
}
