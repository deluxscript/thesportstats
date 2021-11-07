import Link from 'next/link'

export default function Header() {

   return (
      <header className="container mx-auto px-4" style={{height: "80px"}}>
         <div className="flex flex-row items-center justify-between" style={{height: "inherit"}}>
            <div>
               <Link href='/'>
                  <a>Home</a>
               </Link>
            </div>
            <div>
               <ul className="inline-flex space-x-4">
                  <li>
                     <Link href='/about'>
                        <a>About</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/contact'>
                        <a>Contact</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/privacy-policy'>
                        <a>Privacy Policy</a>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   )
}
