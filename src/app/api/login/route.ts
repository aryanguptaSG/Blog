import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username,password} = reqBody;

        console.log(reqBody);
        if(process.env.USERNAME === username && process.env.PASSWORD === password){
            const response = NextResponse.json({ message: "Logged In successfully", success: true },{status: 200})
            response.cookies.set("loggedIn", "true", {httpOnly: true, path:"/",maxAge: 60 * 60 * 24 * 7});
            console.log("Logged In");
            return response;
        }else{
            return NextResponse.json({ message: "Logged In Failed", success: false },{status: 505})
        }
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}