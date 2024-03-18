import { NextResponse } from "next/server";
import connectMongo from "../../../components/libs/mongodb";
import User from "../../../components/models/userProfiles";

interface UserRequest {
    username: string;
    email: string;
    password: string;
}

interface MessageResponse {
    message: string;
}

export async function POST(request: { json: () => Promise<UserRequest> }) {
    try {
        const {
            username,
            email,
            password
        } = await request.json();
        await connectMongo();
        await User.create({
            username,
            email,
            password
        });
        return NextResponse.json(
            { message: "Section created" } as MessageResponse,
            { status: 201 },
        );
    } catch (err: any) {
        return NextResponse.json({ message: err.message } as MessageResponse, { status: 501 });
    }
}
