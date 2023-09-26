import Link from "next/link"
import { cookies } from "next/headers";

export default function ListItem({index ,  post }:any) {
    const { slug,title,description, thumbnial="" , published} = post
    const date = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })    
    return (
        <li className={`mt-5 text-2xl dark:shadow-dark-box p-5 rounded-xl ${(index%2)==0 ?"left-to-right":"right-to-left"}`}>
            <Link className="" href={`/post/${slug}`}>
                <section className= {`flex flex-wrap ${thumbnial.length >0 ?"xl:justify-start lg:justify-start md:justify-start justify-center space-x-5 space-y-2 ":""}`}>
                    {thumbnial.length>0 && <img src={thumbnial} width={200} height={200}/>}
                    <section className={thumbnial.length>0 ?`xl:w-8/12 lg:w-8/12 md:w-8/12 w-full`:`w-full`}>
                        <h3 className="text-lg font-bold my-0">{title}</h3>
                        <p className="text-sm italic leading-0 text-slate-400 dark:text-slate-400"> Published At :- <time>{date}</time></p>
                        <p className="text-base mt-3 text-slate-600 dark:text-slate-300">{description}</p>
                        {(cookies().get("loggedIn")?.value ||'false') == 'true' && !published && <p className="text-sm italic mt-10 text-red-700">Not Published</p> }
                    </section>
                </section>
            </Link>
        </li>
    )
}