"use client"

import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { RecoilRoot } from "recoil";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en">
       <body className={inter.variable}>
         <RecoilRoot>
             {children}
         </RecoilRoot>
       </body>
     </html>
  )
}
