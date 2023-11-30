import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import CartContextProvider from '@/context/CartContext'

const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative max-w-screen text-sm font-normal ${inter.className}`}>
        <CartContextProvider>
          <main className="w-full lg:max-w-[1280px] pt-10 lg:pt-16 mx-auto text-regular overflow-x-hidden">
            {children}
          </main>
        </CartContextProvider>
      </body>
    </html>
  )
}
