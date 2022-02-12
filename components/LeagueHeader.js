import Image from 'next/image'
export default function LeagueHeader({title, country, logo }) {
   return (
      <div className="flex bg-leagueTabs font-medium text-base text-white py-1 items-center">
         <div className="px-4"><Image src={ logo } alt={title} width={25} height={25}/></div>
         <div>{ country } - { title}</div>
      </div>
   )
 }
 