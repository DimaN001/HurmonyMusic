import Sidebar from '@/components/Sidebar'
import './globals.css'
import {Roboto } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'

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
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
      <Sidebar>
        {children}
      </Sidebar>
      </UserProvider>
      </SupabaseProvider>
      </body>
      </html>
  )
}
