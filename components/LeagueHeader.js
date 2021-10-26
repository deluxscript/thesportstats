import Image from 'next/image'
export default function LeagueHeader({title, country, logo }) {
   const flag = "https://media.api-sports.io/flags/it.svg"
   return (
      <div className="flex bg-gray-600 text-white py-1 items-center">
         <div className="px-4"><Image src={ logo } alt="country_flag" width={25} height={25}/></div>
         <div>{ country } - { title}</div>
      </div>
   )
 }
 