import {connect} from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {title, description,  post, tags, slug, published, thumbnial=""} = reqBody

        console.log(reqBody);

        const newPost = new Post({
            title,
            description,
            post,
            slug,
            tags,
            published,
            thumbnial
        })

        const savedPost = await newPost.save()
        console.log(savedPost);

        return NextResponse.json({
            message: "Post created successfully",
            success: true,
            savedPost
        },
        {status: 200})

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}