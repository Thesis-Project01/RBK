import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import BotpressWebchat from '@/components/chatBot/BotpressWebchat'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
   <html lang="en">
      <head>
        <script src="https://cdn.botpress.cloud/webchat/v0/inject.js" ></script> 
      </head> 
      <body >
        <Navbar/>
        <BotpressWebchat/>
              {children}
         <Footer/>
      </body>
    </html>
  )
}
  