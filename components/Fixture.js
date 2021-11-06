import Image from 'next/image'
import Link from 'next/link'
import { formatTime } from '../lib/util'

export default function Fixture({ id, teams, time, status}) {
   return (
      <div className="flex flex-row justify-between items-center text-sm py-3 border-t-2">
         <div className="w-1/4"><Image src={ teams.home.logo } alt="country_flag" width={20} height={20}/> { teams.home.name }</div>
         <div className="w-1/12">vs</div>
         <div className="w-1/4"><Image src={ teams.away.logo } alt="country_flag" width={20} height={20}/> { teams.away.name }</div>
         <div className="w-1/12">{ formatTime(time)}</div>
         <div className="w-1/5">{ status.long }</div>
         <div>
            <Link href={`/fixtures/${id}`}>
               <a className="rounded-md border p-2">
                  stats
               </a>
            </Link>
         </div>
      </div>
   )
 }
 