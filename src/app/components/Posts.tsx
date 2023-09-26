import ListItem from "./ListItem"
import axios from "axios";
import { cookies } from "next/headers";

export default async function Posts() {
    const isLoggedIn = (cookies().get("loggedIn")?.value ||'false') == 'true';
    const reqBody = isLoggedIn ? { page:1, limit:500, sortDirection:"desc" } 
        :
         { page:1, limit:500, published:true, sortDirection:"desc" }
    const postsList = await axios.post(`${process.env.DOMAIN}/api/post/getAllPost`,reqBody )
    const posts:any = postsList.data;    
    if (!posts.length) {
        return <p className="mt-10 text-center">Sorry, No Posts Available..</p>
    }

    return (
        <section className="xl:w-8/12 lg:w-8/12">
            <h2 className="text-3xl font-bold dark:text-white/90 bg-button px-5 rounded-sm">Articles</h2>
            <ul className="w-full list-none p-0">
                {posts.map((post:any,i:any) => (
                    <ListItem key={i} post={post} />
                ))}
            </ul>
        </section>
    )
}