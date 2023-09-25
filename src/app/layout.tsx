import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog example',
  description: 'Next.js training project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container max-w-[1920p] p-10 text-center m-auto">
          <header className="flex flex-col justify-center items-center">
            <h1>Next.js Blog Example</h1>
            <p className="w-[60ch] text-gray-400 text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula in dolor laoreet, sed.</p>
          </header>
          {children}
          <footer className="flex flex-col justify-center items-center pt-10">
            <p>Blog Example - {currentYear}</p>
          </footer>
        </main>
      </body>
    </html>
  )
}
