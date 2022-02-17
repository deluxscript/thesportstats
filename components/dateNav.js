import Link from 'next/link'
import moment from 'moment';
import { useRouter } from 'next/router'

export default function DateNav(){

   const getNextDays = (() => {
      let arr = []
      for (let i = 1; i < 5; i++) {
         const res = moment().add(i, 'days');
         arr.push(res.format('YYYY-MM-DD'))
      }
      return arr
   })();

   const getPreviousDays = (() => {
      let arr = []
      for (let i = 0; i < 3; i++) {
         const res = moment().add(-i, 'days');
         arr.push(res.format('YYYY-MM-DD'))
      }
      return arr
   })();
  const router = useRouter()
  const getDate = router.asPath.substring(router.asPath.lastIndexOf('/') + 1) || new Date()
  const activeLink = (state) => {
     if(state === getDate){
        return 'bg-statsBgColor rounded-md'
     }
  }
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   const inWords = new Date(getDate);

  return(
     <div>
        <div className="grid md:grid-cols-2 md:gap-0 grid-rows-1 justify-end gap-y-3">
            <div className='justify-self-end text-white font-bold'>
              Matchdays: {getPreviousDays.reverse().map((evt) => (
                  <Link key={evt} href={`/matches/${evt}`}>
                     <a className={`text-sm p-2 ${activeLink(evt)}`}>
                        {evt}
                     </a>
                  </Link>
               ))}
            </div>
            <div>
               {getNextDays.map((evt) => (
                  <Link key={evt} href={`/matches/${evt}`}>
                     <a className={`text-white text-sm font-bold p-2 ${activeLink(evt)}`}>
                        {evt}
                     </a>
                  </Link>
               ))}
            </div>
         </div>
         <h2 className="text-white text-lg py-2 font-bold mt-6">All Matches - { inWords.toLocaleDateString("en-US", options) }</h2>
     </div>
  )

}