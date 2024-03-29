
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter, Tajawal } from 'next/font/google'
import Footer from '@/components/Footer'
import { AppContextProvider } from '@/contexts/AppContext';
import ReactQueryProvider from './ReactQueryProvider';


const inter = Inter({ subsets: ['latin'] })
const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900']
})

export const metadata = {
  title: 'Kora World',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <AppContextProvider>
        <html lang="ar" dir="rtl">
          <body className={[inter.className, tajawal.className]}>
            <Navbar />
            <div className="min-h-[80vh]">{children}</div>
            <Footer />
          </body>
        </html>
      </AppContextProvider>
    </ReactQueryProvider>
  )
}
