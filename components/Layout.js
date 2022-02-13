import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Footer from './Footer'
import Header from './Header'

import banner1 from '../public/images/banner.png'
import banner2 from '../public/images/banner2.png'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()
  const url = (router.pathname === '/') ? 'https://www.thesoccerstats.com' : `https://www.thesoccerstats.com${router.asPath}`
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href= {url} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className="container mx-auto">
         <div className="flex flex-col md:flex-row">
            <div className="md:w-1/6 py-4 text-center">
               {/* <Image src = {banner1} alt = "banner" width={200} />
               <Image src = {banner2} alt = "banner" width={200} /> */}
            </div>
            <div className="md:w-4/6 px-4">
               {children}
            </div>
            <div className="md:w-1/6 py-4 text-center">
               {/* <Image src = {banner1} alt = "banner" width={200} />
               <Image src = {banner2} alt = "banner" width={200} /> */}
            </div>
         </div>
      </div>
      <Footer />
    </div>
  )
}
