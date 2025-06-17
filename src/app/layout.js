import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zamin Ahmadi - Software Engineer Portfolio',
  description: 'Terminal-style portfolio of Zamin Ahmadi, Full Stack Developer',
  keywords: 'software engineer, portfolio, full stack developer, react, node.js',
  author: 'Zamin Ahmadi',
}
export const viewport = {
	width: 'device-width',
	initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
