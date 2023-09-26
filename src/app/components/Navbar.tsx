import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';
import logo from "../../assets/images/logo.svg";

export default function Navbar() {
    return (
        <nav className="bg-slate-600 px-4 py-1 sticky top-0 drop-shadow-xl z-10">
            <div className="md:px-6 flex justify-between flex-col sm:flex-row">
                <Link href="/" className="text-white/90 no-underline hover:text-white">
                    <Image src={logo} alt="logo" width={60} height={80}/>
                </Link>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-3xl items-center">
                    <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/aryanguptasg">
                        <FaLinkedinIn />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://youtube.com/@aryanguptasg?si=ow3eHkkQHCU-1v7P">
                        <FaYoutube />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/aryanguptasg">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://twitter.com/aryanguptaSG">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    )
}