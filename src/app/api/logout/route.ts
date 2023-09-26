import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        const response = NextResponse.json({ message: "Logged In successfully", success: true },{status: 200})
        response.cookies.delete("loggedIn");
        return response;
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}