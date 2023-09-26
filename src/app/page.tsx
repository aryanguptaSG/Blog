import Posts from "./components/Posts";
import { cookies } from "next/headers";
import Link from "next/link"

export default function Home() {  
  return (
    <main className="flex flex-col items-center justify-between xl:p-10 lg:p-10 p-5">
      {(cookies().get("loggedIn")?.value ||'false') == 'true' && 
      <section className="flex justify-end w-full mb-5">
        <Link className="text-orange-500 shadow-dark-inset px-5 py-1 rounded-xl" href={`/post`}>New Post</Link>
      </section>}
      <Posts />
    </main>
  )
}
