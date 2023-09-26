import {FormEvent} from "react";
import ReactMarkdown from 'react-markdown'
import 'highlight.js/styles/github-dark.css';
import axios from "axios";
import { useRouter } from "next/navigation";


export default function CreatePost({ params }:any) {
    const { post, setPost, title, setTitle, description, setDescription, tags, settags, publish, setPublish, slug, setSlug, thumbnial, setThumbnial, handleSubmit, pageTitle = "New Post", buttonText="Submit" } = params;

    const router = useRouter();

    const logout = async() => {
        const res = await axios.post("/api/logout");
        if(res.status == 200){
            router.push("/");
        }
    }

    return (
        <main className="p-3 ">
            <section className="text-right">
                <button className="text-white mt-10 bg-button px-10 py-2 rounded-lg" onClick={logout}>Log Out</button>
            </section>
            <h1 className="text-2xl mb-5">{pageTitle}</h1>
            <form onSubmit={handleSubmit} className="flex space-y-10 flex-col mb-10">
                    <section>
                        <label htmlFor="title">Title</label>
                        <input id="title" value={title} onChange={e => setTitle(e.target.value)} className="w-full mt-2 px-5 py-2 outline-none rounded-md border-gray border shadow shadow-slate-900 dark:bg-black" required/>
                    </section>
                    <section>
                        <label htmlFor="description">Description</label>
                        <input id="description" value={description} onChange={e => setDescription(e.target.value)} className="w-full mt-2 px-5 py-2 outline-none rounded-md border-gray border shadow shadow-slate-900 dark:bg-black" required/>
                    </section>
                    <section>
                        <label htmlFor="slug">Slug</label>
                        <input id="slug" value={slug} onChange={e => setSlug(e.target.value)} className="w-full mt-2 px-5 py-2 outline-none rounded-md border-gray border shadow shadow-slate-900 dark:bg-black" required/>
                    </section>
                    <section className="flex">
                        <section className="w-1/2">
                            <label htmlFor="post">Post</label>
                            <textarea id="post" value={post} onChange={e => setPost(e.target.value)} className="w-full mt-2 px-5 py-2 outline-none rounded-md h-full border-gray border shadow shadow-slate-900 dark:bg-black" required/>
                        </section>
                        <section className="ml-5 w-1/2">
                            <p>Preview</p>
                            <article className="border-white border-solid border h-full rounded-lg px-5 py-2 mt-2  prose prose-xl prose-slate dark:prose-invert">
                                <ReactMarkdown>{post}</ReactMarkdown>
                            </article>
                        </section>
                    </section>
                    <section>
                        <label htmlFor="tags">Tags</label>      
                        <input id="tags" value={tags} onChange={e => settags(e.target.value)} className="w-full mt-2 px-5 py-2 outline-none rounded-md border-gray border shadow shadow-slate-900 dark:bg-black" required/>
                    </section>
                    <section>
                        <label htmlFor="thumbnial">Thumbnial</label>
                        <input id="thumbnial" value={thumbnial} onChange={e => setThumbnial(e.target.value)} className="w-full mt-2 px-5 py-2 outline-none rounded-md border-gray border shadow shadow-slate-900 dark:bg-black"/>
                    </section>
                    <section>
                        <label htmlFor="publish">Publish</label>
                        <input id="publish" type="checkbox" checked={publish} onChange={e => setPublish(e.target.checked)} className="ml-2 outline-none" />
                    </section>
                <button className="text-white w-fit mb-20 bg-button px-10 py-2 rounded-lg" type="submit">{buttonText}</button>
            </form>
        </main>
    );
}
