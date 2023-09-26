import {connect} from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {id, title , description, post, slug, tags, published, thumbnial } = reqBody

        console.log(reqBody);

        const myPost = await Post.findByIdAndUpdate(id, 
            {title, description, post, slug, tags, published, thumbnial})

        if(!myPost) return NextResponse.json({error: "Post not found"}, {status: 404});

        // if(post) myPost.post = post
        // if(slug) myPost.slug = slug
        // if(tags) myPost.tags = tags
        // if(published) myPost.published = published
        // if(thumbnial) myPost.thumbnial = thumbnial
        // if(title) myPost.title = title
        // if(description) myPost.description = description

        // const savedPost = await myPost.save()
        console.log(myPost);

        return NextResponse.json({
            message: "Post updated successfully",
            success: true,
            myPost
        },
        {status: 200})

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}