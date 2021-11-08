import Link from 'next/link'
import logo from '../public/logo.png'
import Image from 'next/image'

export default function Header() {

   return (
      <header className="container mx-auto px-4">
         <div className="flex flex-row items-center justify-between" style={{height: "inherit"}}>
            <div>
               <Link href='/'>
                  <a><Image src = {logo} alt = "TheFootballStats" height={60} /></a>
               </Link>
            </div>
            <div>
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
