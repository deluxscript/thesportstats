export default function AwayTeamStat({ stats }) {
  return (
      <div className="py-8">
         <table className="table-fixed md:w-3/4 w-full text-white">
            <thead>
               <tr>
                  <th className="w-1/4"></th>
                  <th className="w-1/4">Home</th>
                  <th className="w-1/4">Away</th>
                  <th className="w-1/4">Total</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Played</td>
                  <td className="text-center">{ stats.played.home }</td>
                  <td className="text-center">{ stats.played.away }</td>
                  <td className="text-center">{ stats.played.total }</td>
               </tr>
               <tr className="bg-h2hBg">
                  <td>Wins</td>
                  <td className="text-center">{ stats.wins.home }</td>
                  <td className="text-center">{ stats.wins.away }</td>
                  <td className="text-center">{ stats.wins.total }</td>
               </tr>
               <tr>
                  <td>Draws</td>
                  <td className="text-center">{ stats.draws.home }</td>
                  <td className="text-center">{ stats.draws.away }</td>
                  <td className="text-center">{ stats.draws.total }</td>
               </tr>
               <tr className="bg-h2hBg">
                  <td>Loses</td>
                  <td className="text-center">{ stats.loses.home }</td>
                  <td className="text-center">{ stats.loses.away }</td>
                  <td className="text-center">{ stats.loses.total }</td>
               </tr>
            </tbody>
         </table>
      </div>
  )
}
