import { Navbar, Footer } from '@/components'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Discover the best cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
