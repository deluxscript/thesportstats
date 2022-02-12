import Image from 'next/image'
import Link from 'next/link'
import { formatTime } from '../lib/util'

export default function Fixture({ id, teams, time, status}) {
   return (
      <div className="flex flex-row justify-between items-center text-white text-sm py-3 border-teamBorderBottom border-b">
         <div className="w-1/4"><Image src={ teams.home.logo } alt={teams.home.name} width={20} height={20}/> { teams.home.name }</div>
         <div className="w-1/12">vs</div>
         <div className="w-1/4"><Image src={ teams.away.logo } alt={teams.away.name} width={20} height={20}/> { teams.away.name }</div>
         <div className="w-1/12 text-xs">{ formatTime(time)}</div>
         <div className="md:w-1/5 text-xs">{ status.short }</div>
         <div>
            <Link href={`/fixtures/${(teams.home.name).toLowerCase().replace(/\s+/g, '-')}-vs-${(teams.away.name).toLowerCase().replace(/\s+/g, '-')}?id=${id}`}>
               <a className="rounded-md bg-statsBgColor text-xs p-2">
                  stats
               </a>
            </Link>
         </div>
      </div>
   )
 }
 