import Link from "next/link"
import { log } from "console";
import { cookies } from "next/headers";

export default function ListItem({ post }:any) {
    const { slug,title,description, thumbnial="" , published} = post
    log("this is post aryan ->>>>>> ",post);
    const date = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return (
        <li className="mt-5 text-2xl dark:text-white/90 shadow-dark-box p-3 rounded-lg">
            <Link className=" hover:text-black/70 dark:hover:text-white" href={`/post/${slug}`}>
                <div className= {`flex flex-wrap ${thumbnial.length >0 ?"xl:justify-start lg:justify-start md:justify-start justify-center space-x-5 space-y-2 ":""}`}>
                    {thumbnial.length>0 && <img src={thumbnial} width={200} height={200}/>}
                    <div className={thumbnial.length>0 ?`xl:w-8/12 lg:w-8/12 md:w-8/12 w-full`:`w-full`}>
                        <h3 className="text-lg font-bold my-0">{title}</h3>
                        <p className="text-sm italic leading-0"> Published At :- <time>{date}</time></p>
                        <p className="text-base mt-3">{description}</p>
                        {(cookies().get("loggedIn")?.value ||'false') == 'true' && !published && <p className="text-sm italic mt-10 text-red-700">Not Published</p> }
                    </div>
                </div>
            </Link>
            <br />
        </li>
    )
}