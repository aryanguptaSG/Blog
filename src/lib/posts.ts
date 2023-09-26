import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import Video from '@/app/components/Video'
import CustomImage from '@/app/components/CustomImage'
import axios from 'axios';

export async function getMDX(rawMDX: string, slug: string): Promise<BlogPost | undefined> {
    const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[] }>({
        source: rawMDX,
        components: {
            Video,
            CustomImage,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                ],
            },
        }
    })

    const blogPostObj: BlogPost = { meta: { id:slug, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags }, content }

    return blogPostObj
}

// export async function getPostsMeta(page=1,limit=20,published=true,sortDirection='desc'): Promise<BlogPost[] | undefined> {
//     const res = await axios.post(`${process.env.DOMAIN}/api/post/getAllPost`, { page,limit,sortDirection });

//     console.log("All Posts", res.data);
    

//     const posts: BlogPost[] = []

//     for (const post of res.data) {
//         console.log("file", post);
//         const postRes = await getMDX(post.post, post.slug);
//         if (postRes) {
//             console.log("This is postRes",postRes);
//             const { meta } = postRes
//             posts.push(postRes)
//         }
//     }
//     console.log("This is posts array",posts);
    
//     return posts;
// }