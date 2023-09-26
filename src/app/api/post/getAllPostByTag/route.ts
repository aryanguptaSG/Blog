import {connect} from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function POST(request: NextRequest){
    const reqBody = await request.json()
    const {page = 1, limit = 20 , published=true, tag = "", sortDirection = 'desc'} = reqBody

    console.log(reqBody);
    const skip = (page - 1) * limit;
  
    try {
      const posts = await Post.find({ tags: tag })
        .where('published').equals(published)
        .limit(parseInt(limit))
        .skip(skip)
        .sort({ date: sortDirection === 'asc' ? 1 : -1 })
        .exec()
        return NextResponse.json({posts}, {status: 200});
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}