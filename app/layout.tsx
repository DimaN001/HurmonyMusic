import Sidebar from '@/components/Sidebar'
import './globals.css'
import {Roboto } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import Player from '@/components/Player'
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
      <html lang="uk" >
      <link rel="icon" href="images/LOGO.jpg" />
      <body className={font.className} >
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
      <Sidebar songs={userSongs}>
        {children}
      </Sidebar>
      <Player/>
      </UserProvider>
      </SupabaseProvider>
      </body>
      </html>
  )
}
