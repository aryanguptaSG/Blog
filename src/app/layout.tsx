import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aryan Gupta - Blog',
  description: 'Explore the latest in technology trends, innovation, and insights on Aryan Gupta - Blogs. Our technical blogs cover a wide range of topics, from artificial intelligence to quantum computing, providing you with in-depth knowledge and practical tips to stay ahead in the tech world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-dark-gray text-white"}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
