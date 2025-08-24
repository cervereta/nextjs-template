import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nextjs-template',
  description: 'Proyecto Next.js 14 con TypeScript y Tailwind CSS',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Tu Nombre' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        <div className="min-h-full flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}