import {connect} from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function POST(request: NextRequest){
    const reqBody = await request.json()
    const {slug=""} = reqBody

    console.log("This is Body ->>>>",reqBody);
    

    try {
      const posts = await Post.find({ slug: slug })
        return NextResponse.json({posts}, {status: 200});
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}