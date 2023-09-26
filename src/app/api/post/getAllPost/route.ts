import {connect} from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function POST(request: NextRequest){
    const reqBody = await request.json()
    const {page = 1, limit = 20 , published, sortDirection = 'desc'} = reqBody
    const skip = (page - 1) * limit;
  
    try {
      const posts = published!==undefined ? 
        await Post.find()
        .where('published').equals(published)
        .limit(parseInt(limit))
        .skip(skip)
        .sort({ date: sortDirection === 'asc' ? 1 : -1 })
        .exec()
        : 
        await Post.find()
        .limit(parseInt(limit))
        .skip(skip)
        .sort({ date: sortDirection === 'asc' ? 1 : -1 })
        .exec()
  
        return NextResponse.json(posts);
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}