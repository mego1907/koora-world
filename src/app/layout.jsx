
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter, Tajawal } from 'next/font/google'
import Footer from '@/components/Footer'
import { AppContextProvider } from '@/contexts/AppContext';
import ReactQueryProvider from './ReactQueryProvider';
import { CookiesProvider } from 'next-client-cookies/server';


const inter = Inter({ subsets: ['latin'] })
const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900']
})

export const metadata = {
  title: 'Kora World',
  description: 'Kora World',
}


export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={[tajawal.className]}>
        <ReactQueryProvider>
          <AppContextProvider>
            <Navbar />
            <div className="min-h-[80vh]">{children}</div>
            <Footer />
          </AppContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
