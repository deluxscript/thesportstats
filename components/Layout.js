import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'

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
               </div>
               <div className="md:w-4/6 px-4">
                  {children}
                  <p className="text-white test-xs mb-4">NS: Not Started FT:  Match Finished | PST: Postponded | 1H: First Half | 2H: Second half | HT : Halftime </p>
               </div>
               <div className="md:w-1/6 py-4 text-center">
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}
