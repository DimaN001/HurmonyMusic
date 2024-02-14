import Sidebar from '@/components/Sidebar'
import './globals.css'
import {Roboto } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

const font = Roboto({ weight: '700', subsets: ['cyrillic'] })



export const metadata = {
  title: 'HarmonyMusic',
  description: 'Слухай якісну музику!',
};

export const revalidate=0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
      <html lang="uk">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
      <Sidebar songs={userSongs}>
        {children}
      </Sidebar>
      </UserProvider>
      </SupabaseProvider>
      </body>
      </html>
  )
}
