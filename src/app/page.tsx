import Posts from "./components/Posts";
import { cookies } from "next/headers";
import Link from "next/link"

export default function Home() {  
  return (
    <main className="flex flex-col items-center justify-between p-10 no-scrollbar">
      {(cookies().get("loggedIn")?.value ||'false') == 'true' && <div className="flex justify-end w-full">
                <Link className="text-orange-500 shadow-dark-inset px-5 py-1 rounded-lg" href={`/post`}>New Post</Link>
            </div>}
      <Posts />
    </main>
  )
}