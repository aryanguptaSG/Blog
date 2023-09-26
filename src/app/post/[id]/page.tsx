import { getMDX } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/github-dark.css';
import axios from "axios";
import { cookies } from "next/headers";

export const revalidate = 86400

type Props = {
    params: {
        id: string
    }
}


export default async function Post({ params: { id } }: Props) {

    console.log("This is cookiee ->",cookies().get("loggedIn")?.value);
    

    const postResp:any = await axios.post(`${process.env.DOMAIN}/api/post/getPostBySlug`, {slug : id});
    console.log("this is post aryan ->>>>>> ",postResp.data);
    const data = postResp.data.posts;
    console.log("this is data aryan ->>>>>> data ",data);
    if(data.length == 0) notFound();
    
    const post = await getMDX(data[0].post,data[0].slug) //deduped!

    if (!post) notFound()

    const { meta, content } = post;
    console.log(content);
    const date = new Date(data[0].date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    const tags = data[0].tags.map((tag:any, i:any) => (
        <li>
            <Link className="text-orange-500 shadow-dark-inset px-5 py-1 rounded-lg" key={i} href={`/tag/${tag}`}>{tag}</Link>
        </li>
    ))

    return (
        <main className="flex flex-col justify-center items-center p-5 text-base">
            {(cookies().get("loggedIn")?.value ||'false') == 'true' && <section className="flex justify-end w-full">
                <Link className="text-orange-500 shadow-dark-inset px-5 py-1 rounded-lg" href={`/post/update/${data[0].slug}`}>Update Post</Link>
            </section>}
            <h1 className="text-3xl mt-4 mb-0">{data[0].title}</h1>
            <p className="text-sm italic mt-2"> Published At :- <time>{date}</time></p>
            <h2 className="text-xl mt-4 mb-5 px-5 xl:w-8/12 lg:w-8/12 ">{data[0].description}</h2>
            {data[0].thumbnial.length>0 && <img className="rounded-lg mx-auto mb-10" src={data[0].thumbnial} alt="thumbnial" width={300} />}
            <article className="prose prose-xl prose-slate dark:prose-invert w-full">
                {content}
            </article>
            <section className="prose prose-xl prose-slate dark:prose-invert w-full mt-10">
                <hr />
                <h4>Related Article :</h4>
                <ul className="flex flex-row gap-4 list-none p-0">
                    {tags}
                </ul>
            </section>
            <p className="mb-10">
                <Link href="/">← Back to home</Link>
            </p>
        </main>
    )
}