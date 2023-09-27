import { ImageResponse } from "next/server";
import axios from "axios";

export const size = {
    width : 900,
    height : 450
}

export const contentType = "image/png";
 
type Props = {
    params: {
        id: string
    }
}

export default async function og ({ params: { id } }: Props){
    const postResp:any = await axios.post(`${process.env.DOMAIN}/api/post/getPostBySlug`, {slug : id});
    const data = postResp.data.posts;
    if(data.length == 0){
        return {
            title: "404",
            description: "Page Not Found",
        }
    }
    const post = data[0];
    return new ImageResponse(
        (
          <div tw="relative flex items-center justify-center">
            {post.thumbnial.length>0 && <img tw="rounded-lg mx-auto mb-10" src={post.thumbnial} alt="thumbnial"/>}
            <div tw="absolute flex bg-black opacity-50 inset-0 " />
            <div tw="absolute flex flex-col items-center top-2 w-full ">
              <p tw="text-white text-4xl flex font-bold m-5">{post.title}</p>
              <p tw="text-indigo-100 text-xl flex font-bold m-5">{post.description.slice(0,150)+"..."}</p>
            </div>
          </div>
        ),
        size
      );
}
