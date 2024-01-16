import Sidebar from '@/components/Sidebar'
import './globals.css'
import {Roboto } from 'next/font/google'

const font = Roboto({ weight: '700', subsets: ['cyrillic'] })



export const metadata = {
  title: 'HarmonyMusic',
  description: 'Слухай якісну музику!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="uk">
      <body className={font.className}>
      <Sidebar>
        {children}
      </Sidebar>
      </body>
      </html>
  )
}
