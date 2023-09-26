"use client";
import axios from "axios";
import {useRouter} from "next/navigation";

export default function LogIn() {
    const router = useRouter();
    
    const logIn = (e:any) => {
        e.preventDefault();
        console.log("LogIn");
        if(!e.target[0].value || !e.target[1].value){
            alert("Please fill all the fields");
            return;
        }
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(process.env.USERNAME);
        console.log(process.env.PASSWORD);
        
         axios.post("/api/login", {
            username:e.target[0].value,
            password:e.target[1].value
        }).then(res => {
            console.log(res);
            router.push("/");
        }
        ).catch(err => {
            console.log(err);
            alert("Wrong username or password");
        }
        )
        
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10">
            <h1 className="text-4xl font-bold dark:text-white/90">LogIn</h1>
            <form onSubmit={logIn} className="flex flex-col items-center justify-between p-10 space-y-5">
                <input className="text-black1 border-2 border-black/70 rounded-md p-2 outline-none" type="text" placeholder="Username" />
                <input className="text-black1 border-2 border-black/70 rounded-md p-2 outline-none" type="password" placeholder="Password" />
                <button className="bg-button px-5 py-2 rounded-md" type="submit">LogIn</button>
            </form>
        </main>
    )
}