import Image from 'next/image'
import HomeTeamStat from './HomeTeamStats'
import AwayTeamStat from './AwayTeamStats'

export default function SingleTeamStat({home, away}) {
   const homeResponse = home.response
   const awayResponse = away.response
   const homeForm = homeResponse.form ? homeResponse.form.split("") : "No Form available"
   const awayForm = awayResponse.form ? awayResponse.form.split("") : "No Form available"

   
   const formattedHomeForm = (homeForm.length > 6) ? homeForm.slice(homeForm.length - 6, homeForm.length) : homeForm
   const formattedAwayForm = (awayForm.length > 6) ? awayForm.slice(awayForm.length - 6, awayForm.length) : awayForm

   return (
      <div className="grid grid-cols-2 gap-4">
         <div className="homeTeam">
            <div className="text-center">
               <Image src = {homeResponse.team.logo} alt = { homeResponse.team.name } width={80} height={80} />
               <h1 className="py-2">{ homeResponse.team.name }</h1>
               <p>{ Array.isArray(formattedHomeForm) ? formattedHomeForm.map((form, index) => {
                  return (form === "L") ? <span className="bg-red-500 text-white px-2 py-1" key={index}>{form}</span> : (form === "W") ? <span className="bg-green-500 text-white px-2 py-1" key={index}>{form}</span> : <span className="bg-gray-500 text-white px-2 py-1" key={index}>{form}</span>
               })  : "Form unavailable"}</p>
            </div>
            <HomeTeamStat stats = { homeResponse.fixtures }/>
         </div>
         <div className="awayTeam">
            <div className="text-center">
               <Image src = {awayResponse.team.logo} alt = { awayResponse.team.name } width={80} height={80} />
               <h1 className="py-2">{ awayResponse.team.name }</h1>
               <p>{ Array.isArray(formattedAwayForm) ? formattedAwayForm.map((form, index) => {
                  return (form === "L") ? <span className="bg-red-500 text-white px-2 py-1" key={index}>{form}</span> : (form === "W") ? <span className="bg-green-500 text-white px-2 py-1" key={index}>{form}</span> : <span className="bg-gray-500 text-white px-2 py-1" key={index}>{form}</span>
               }) : "Form unavailable"}</p>
            </div>
            <AwayTeamStat stats = { awayResponse.fixtures }/>
         </div>
      </div>
   )
}
