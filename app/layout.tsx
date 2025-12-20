import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Ubuntu } from 'next/font/google'

const poppin = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] })
const ubuntu = Ubuntu({ 
  weight: ["400", "500", "700"], 
  subsets: ["latin"] ,
  variable: "--font-ubuntu"
})


export const metadata: Metadata = {
  title: 'Dexify',
  description: 'Decentralized App Cloud Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppin.className} ${ubuntu.variable} bg-light-mode dark:bg-dark-mode overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
