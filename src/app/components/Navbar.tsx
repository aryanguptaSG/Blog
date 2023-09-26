"use client";
import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';
import logo from "../../assets/images/logo.svg";
import {MdDarkMode, MdOutlineDarkMode} from "react-icons/md";
import {setCookie, getCookie} from "@/helper/helper.js";
import { useEffect, useState } from "react";

export default function Navbar() { 
    const [theme, settheme] = useState("dark");  
    const setTheme = (theme:any) => {
        setCookie("theme", theme,5);
        window.location.reload();
    }

    useEffect(() => {
        const theme = getCookie("theme") || "dark"; 
        settheme(prev=>theme);
    }, [])
    

    return (
        <nav className="bg-slate-400 dark:bg-slate-600 px-4 py-1 sticky top-0 drop-shadow-xl z-10 md:px-6 flex justify-between flex-col sm:flex-row">
            <Link href="/" className="text-white/90 no-underline hover:text-white">
                <Image src={logo} alt="logo" width={60} height={80}/>
            </Link>
            <ul className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-3xl items-center list-none p-0">
                <li>
                    <Link className="text-white/90 hover:text-white cursor-pointer" href="https://www.linkedin.com/in/aryanguptasg">
                        <FaLinkedinIn />
                    </Link>
                </li>
                <li>
                    <Link className="text-white/90 hover:text-white cursor-pointer" href="https://youtube.com/@aryanguptasg?si=ow3eHkkQHCU-1v7P">
                        <FaYoutube />
                    </Link>
                </li>
                <li>
                    <Link className="text-white/90 hover:text-white cursor-pointer" href="https://github.com/aryanguptasg">
                        <FaGithub />
                    </Link>
                </li>
                <li>
                    <Link className="text-white/90 hover:text-white cursor-pointer" href="https://twitter.com/aryanguptaSG">
                        <FaTwitter />
                    </Link>
                </li>
                <li className="cursor-pointer ">
                    {theme === "dark" ? <MdDarkMode onClick={() => setTheme("light")} /> : <MdOutlineDarkMode onClick={() => setTheme("dark")} />}
                </li>
            </ul>
        </nav>
    )
}