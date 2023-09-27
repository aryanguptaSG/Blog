import ListItem from "../../components/ListItem";
import axios from "axios";
import { Metadata } from "next";

type Props = {
    params: {
        id: string
    }
}

export const revalidate = 86400;

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    return {
        title: 'Tag - '+id,
    description: 'Explore the latest in technology trends, innovation, and insights on Aryan Gupta - Blogs. Our technical blogs cover a wide range of topics, from artificial intelligence to quantum computing, providing you with in-depth knowledge and practical tips to stay ahead in the tech world.',
    }
}

export default async function Posts({ params: { id } }: Props) {
    const postsList = await axios.post(`${process.env.DOMAIN}/api/post/getAllPostByTag`, {
        page:1,
        limit:500,
        published:true,
        tag:id
    });
    const posts:any = postsList.data.posts;
    
    if (!posts.length) {
        return <p className="mt-10 text-center">Sorry, No Posts Available.</p>
    }

    return (
     <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <section className="xl:w-8/12 lg:w-8/12">
            <h2 className="text-3xl font-bold text-white/90 bg-button px-5 rounded-sm">Tags :- {id}</h2>
            <ul className="w-full list-none p-0">
                {posts.map((post:any,i:any) => (
                    <ListItem key={i} index={i} post={post} />
                ))}
            </ul>
        </section>
      </main>
    )
}