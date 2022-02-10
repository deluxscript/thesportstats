import Link from 'next/link'
import logo from '../public/thesoccerstats.png'
import Image from 'next/image'

export default function Header() {

   return (
      <header className="container mx-auto px-4">
         <div className="flex flex-row items-center justify-between" style={{height: "inherit"}}>
            <div>
               <Link href='/'>
                  <a><Image src = {logo} alt = "TheSoccerStats" height={120} width={240} /></a>
               </Link>
            </div>
            <div className='text-white'>
               <ul className="inline-flex space-x-4">
                  <li>
                     <Link href='/about'>
                        <a>About</a>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   )
}
