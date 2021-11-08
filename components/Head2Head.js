export default function Head2Head({ h2h, homeName, awayName }) {
   const displayH2H = h2h.map((stats) => {
      const date = new Date(stats.fixture.date).toLocaleDateString()
      const homeTeam = stats.teams.home.name
      const awayTeam = stats.teams.away.name
      const homeScore = stats.score.fulltime.home
      const awayScore = stats.score.fulltime.away
      const winner = Math.max(homeScore, awayScore)
      return (
         <div key = {stats.fixture.id} className="py-1 border-b-2">
            <div className="w-1/12 text-xs font-bold">{ date }</div>
            <div className="flex flex-row text-sm">
               <div className="w-2/6">{homeTeam}</div>
               <div className="w-1/6">
                  <span className="bg-gray-400 text-white p-2 rounded-md">{homeScore} : {awayScore}</span>
               </div>
               <div className="w-2/6">{awayTeam}</div>
               <div className="w-1/12 text-center">
                  {(homeScore === awayScore)
                  ? <div className="bg-gray-500 text-white px-2 py-1">D</div>
                  : ((winner === homeScore) && (homeName === homeTeam))
                  ? <div className="bg-green-500 text-white px-2 py-1">W</div>
                  : ((winner === awayScore) && (homeName === awayTeam))
                  ? <div className="bg-green-500 text-white px-2 py-1">W</div>
                  : ((winner === awayScore) && (awayName === awayTeam))
                  ? <div className="bg-green-500 text-white px-2 py-1">W</div>
                  : ((winner === homeScore) && (awayName === homeTeam))
                  ? <div className="bg-green-500 text-white px-2 py-1">W</div>
                  : <div className="bg-red-500 text-white px-2 py-1">L</div>}
               </div>
            </div>
         </div>
      )
   })
   return (
      <div className="py-8">
         <h1 className="my-2 text-lg">Previous Meetings</h1>
         <div className ="flex flex-col">
            { displayH2H }
         </div>
      </div>
   )
 }
 