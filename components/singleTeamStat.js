import Image from 'next/image'
import HomeTeamStat from './HomeTeamStats'
import AwayTeamStat from './AwayTeamStats'
import Head2Head from './Head2Head'

export default function SingleTeamStat({
   home,
   away,
   h2h,
   getLeague,
   getCountry,
   last5HomeResults,
   last10HomeResults,
   last15HomeResults,
   last5AwayResults,
   last10AwayResults,
   last15AwayResults,
}) {

   let homeWinsIn5 = []
   let homeWinsIn5Goals = 0
   for (const element of last5HomeResults.response){
      const {goals, teams} = element
      homeWinsIn5Goals += goals.home + goals.away
      if((goals.away > goals.home) && (teams.away.name === home.response.team.name)){
         homeWinsIn5.push(goals)
         
      }
      if((goals.home > goals.away) && (teams.home.name === home.response.team.name)){
         homeWinsIn5.push(goals)
      }
   }

   let homeWinsIn10 = []
   let homeWinsIn10Goals = 0
   for (const element of last10HomeResults.response){
      const {goals, teams} = element
      homeWinsIn10Goals += goals.home + goals.away
      if((goals.away > goals.home) && (teams.away.name === home.response.team.name)){
         homeWinsIn10.push(goals)
      }
      if((goals.home > goals.away) && (teams.home.name === home.response.team.name)){
         homeWinsIn10.push(goals)
      }
   }

   let homeWinsIn15 = []
   let homeWinsIn15Goals = 0
   for (const element of last15HomeResults.response){
      const {goals, teams} = element
      homeWinsIn15Goals += goals.home + goals.away
      if((goals.away > goals.home) && (teams.away.name === home.response.team.name)){
         homeWinsIn15.push(goals)
      }
      if((goals.home > goals.away) && (teams.home.name === home.response.team.name)){
         homeWinsIn15.push(goals)
      }
   }

   let awayWinsIn5 = []
   let awayWinsIn5Goals = 0
   for (const element of last5AwayResults.response){
      const {goals, teams} = element
      awayWinsIn5Goals += goals.home + goals.away
      if((goals.away > goals.home) && (teams.away.name === away.response.team.name)){
         awayWinsIn5.push(goals)
      }
      if((goals.home > goals.away) && (teams.home.name === away.response.team.name)){
         awayWinsIn5.push(goals)
      }
   }

   let awayWinsIn10 = []
   let awayWinsIn10Goals = 0
   for (const element of last10AwayResults.response){
      const {goals, teams} = element
      awayWinsIn10Goals += goals.home + goals.away
      if((goals.away > goals.home) && (teams.away.name === away.response.team.name)){
         awayWinsIn10.push(goals)
      }
      if((goals.home > goals.away) && (teams.home.name === away.response.team.name)){
         awayWinsIn10.push(goals)
      }
   }

   let awayWinsIn15 = []
   let awayWinsIn15Goals = 0
   for (const element of last15AwayResults.response){
      const {goals, teams} = element
      awayWinsIn15Goals += goals.home + goals.away
      if((goals.away > goals.home) && (teams.away.name === away.response.team.name)){
         awayWinsIn15.push(goals)
      }
      if((goals.home > goals.away) && (teams.home.name === away.response.team.name)){
         awayWinsIn15.push(goals)
      }
   }

   const homeResponse = home.response
   const awayResponse = away.response
   const homeForm = homeResponse.form ? homeResponse.form.split("") : "No Form available"
   const awayForm = awayResponse.form ? awayResponse.form.split("") : "No Form available"
   
   const formattedHomeForm = (homeForm.length > 6) ? homeForm.slice(homeForm.length - 6, homeForm.length) : homeForm
   const formattedAwayForm = (awayForm.length > 6) ? awayForm.slice(awayForm.length - 6, awayForm.length) : awayForm
console.log(getLeague)
   return (
      <div>
         <h1 className="text-2xl text-white text-center py-4">{getCountry} - {getLeague}</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div className="homeTeam">
               <div className="text-center">
                  <Image src = {homeResponse.team.logo} alt = { homeResponse.team.name } width={80} height={80} />
                  <h1 className="py-2 text-white">{ homeResponse.team.name }</h1>
                  <p className="text-white">{ Array.isArray(formattedHomeForm) ? formattedHomeForm.map((form, index) => {
                     return (form === "L") ? <span className="bg-red-500 text-white px-2 py-1" key={index}>{form}</span> : (form === "W") ? <span className="bg-green-500 text-white px-2 py-1" key={index}>{form}</span> : <span className="bg-gray-500 text-white px-2 py-1" key={index}>{form}</span>
                  })  : "Form unavailable"}</p>
               </div>
               <HomeTeamStat stats = { homeResponse.fixtures }/>
               <Head2Head h2h = { h2h } homeName={ homeResponse.team.name }/>
            </div>
            <div className="awayTeam">
               <div className="text-center">
                  <Image src = {awayResponse.team.logo} alt = { awayResponse.team.name } width={80} height={80} />
                  <h1 className="py-2 text-white">{ awayResponse.team.name }</h1>
                  <p className="text-white">{ Array.isArray(formattedAwayForm) ? formattedAwayForm.map((form, index) => {
                     return (form === "L") ? <span className="bg-red-500 text-white px-2 py-1" key={index}>{form}</span> : (form === "W") ? <span className="bg-green-500 text-white px-2 py-1" key={index}>{form}</span> : <span className="bg-gray-500 text-white px-2 py-1" key={index}>{form}</span>
                  }) : "Form unavailable"}</p>
               </div>
               <AwayTeamStat stats = { awayResponse.fixtures }/>
               <Head2Head h2h = { h2h } awayName = { awayResponse.team.name }/>
            </div>
         </div>
         <div className="text-white">
            <h1 className="my-2 text-lg text-white">Key Stats</h1>
            <p><b>{homeResponse.team.name}</b> have won <b>{homeWinsIn5.length} matches</b> in the last <b>5 matches</b> in the {getLeague} with an average of <b>{(homeWinsIn5Goals/5).toFixed(1)} goals</b> per match</p>
            <p><b>{homeResponse.team.name}</b> have won <b>{homeWinsIn10.length} matches</b> in the last <b>10 matches</b> in the {getLeague} with an average of <b>{(homeWinsIn10Goals/10).toFixed(1)} goals</b> per match</p>
            <p><b>{homeResponse.team.name}</b> have won <b>{homeWinsIn15.length} matches</b> in the last <b>15 matches</b> in the {getLeague} with an average of <b>{(homeWinsIn15Goals/15).toFixed(1)} goals</b> per match</p>
            <br></br>
            <p><b>{awayResponse.team.name}</b> have won <b>{awayWinsIn5.length} matches</b> in the last <b>5 matches</b> in the {getLeague} with an average of <b>{(awayWinsIn5Goals/5).toFixed(1)} goals</b> per match</p>
            <p><b>{awayResponse.team.name}</b> have won <b>{awayWinsIn10.length} matches</b> in the last <b>10 matches</b> in the {getLeague} with an average of <b>{(awayWinsIn10Goals/10).toFixed(1)} goals</b> per match</p>
            <p><b>{awayResponse.team.name}</b> have won <b>{awayWinsIn15.length} matches</b> in the last <b>15 matches</b> in the {getLeague} with an average of <b>{(awayWinsIn15Goals/15).toFixed(1)} goals</b> per match</p>
         </div>
      </div>
   )
}
