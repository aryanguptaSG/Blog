import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { cookies } from "next/headers";


export const metadata: Metadata = {
  metadataBase: new URL(process.env.DOMAIN || "http://localhost:3000"),
  title: 'Aryan Gupta - Blog',
  description: 'Explore the latest in technology trends, innovation, and insights on Aryan Gupta - Blogs. Our technical blogs cover a wide range of topics, from artificial intelligence to quantum computing, providing you with in-depth knowledge and practical tips to stay ahead in the tech world.',
  authors: [{ name: 'Aryan Gupta' }],
  verification: {
    google: `google-site-verification=${process.env.GOOGLE_VERIFICATION}`,
  },
  keywords: ["aryanguptaSG","Aryan Gupta - Blog"],
  appleWebApp: true,
  applicationName: "Aryan Gupta - Blog",
  twitter: {
    title: "Aryan Gupta",
    site: "@aryanguptaSG",
    card: "summary_large_image",
    description: "Explore the latest in technology trends, innovation, and insights on Aryan Gupta - Blogs. Our technical blogs cover a wide range of topics, from artificial intelligence to quantum computing, providing you with in-depth knowledge and practical tips to stay ahead in the tech world.",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = cookies().get("theme")?.value ||'dark'
  return (
    <html className={`${theme}`} lang="en">
      <body className={" bg-white dark:bg-slate-800 text-slate-900 dark:text-white relative min-h-screen"}>
        <header className='sticky top-0 z-10'>
          <Navbar />
        </header>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
