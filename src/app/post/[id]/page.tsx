import { getMDX } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/github-dark.css';
import axios from "axios";
import { cookies } from "next/headers";
import type { Metadata } from 'next';

export const revalidate = 86400;

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const postResp:any = await axios.post(`${process.env.DOMAIN}/api/post/getPostBySlug`, {slug : id});
    const data = postResp.data.posts;
    if(data.length == 0){
        return {
            title: "404",
            description: "Page Not Found",
        }
    }
    return {
        title: data[0].title,
        description: data[0].description,
        alternates: {
            canonical: `/post/${data[0].slug}`
        },
        openGraph: {
            title: data[0].title,
            description: data[0].description,
            url: `/post/${data[0].slug}`,
            type: "article",
            siteName: "Aryan Gupta - Blog",
            locale: "en_US",
        }
    }
}

export default async function Post({ params: { id } }: Props) {

    

    const postResp:any = await axios.post(`${process.env.DOMAIN}/api/post/getPostBySlug`, {slug : id});
    const data = postResp.data.posts;
    if(data.length == 0) notFound();
    
    const post = await getMDX(data[0].post,data[0].slug) //deduped!

    if (!post) notFound()

    const { content } = post;
    const date = new Date(data[0].date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    const tags = data[0].tags.map((tag:any, i:any) => (
        <li key={i}>
            <Link className="text-orange-500 shadow-dark-inset px-5 py-1 rounded-xl"  href={`/tag/${tag}`}>{tag}</Link>
        </li>
    ))

    return (
        <main className="flex flex-col justify-center items-center p-5 text-base">
            {(cookies().get("loggedIn")?.value ||'false') == 'true' && <section className="flex justify-end w-full">
                <Link className="text-orange-500 shadow-dark-inset px-5 py-1 rounded-xl" href={`/post/update/${data[0].slug}`}>Update Post</Link>
            </section>}
            <section className="alpha flex flex-col justify-center items-center xl:w-10/12 lg:w-9/12 w-full">
                <h1 className="text-3xl mt-4 w-full text-center">{data[0].title}</h1>
                <p className=" text-sm italic mt-2 text-slate-400 dark:text-slate-400 w-full text-center"> Published At :- <time>{date}</time></p>
                <h2 className="text-xl mt-4 mb-5 px-2 text-justify  text-slate-500 dark:text-slate-300 w-full">{data[0].description}</h2>
                {data[0].thumbnial.length>0 && <img className="rounded-lg mx-auto mb-10" src={data[0].thumbnial} alt="thumbnial" width={500} />}
                <article className="prose prose-xl prose-slate dark:prose-invert w-full">
                    {content}
                </article>
                <section className="my-10 w-full">
                    <hr />
                    <h4 className="text-xl font-semibold my-3">Related Article :</h4>
                    <ul className="flex flex-row gap-4 list-none p-0">
                        {tags}
                    </ul>
                </section>
            </section>
            <p className="mb-10">
                <Link href="/">← Back to home</Link>
            </p>
        </main>
    )
}