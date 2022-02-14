export default function Statistics({ stats }) {
   const comp = stats.response[0].comparison
   // console.log("stats", stats.response[0])
   return (
      <div className="py-8">
         <h1 className="my-2 text-lg text-white">Statistics</h1>
         <table className="table-fixed text-white w-full">
            <tbody>
               <tr>
                  <td>
                     <div className="flex">
                        <div className="bg-barSmallHome w-full relative"><span className="bg-barBigHome absolute" style={{width: comp.att.home, height: 24}}></span></div>
                        <div className="px-5">{comp.att.home}</div>
                     </div>
                  </td>
                  <td className="text-center py-2">Attacking Strengths</td>
                  <td>
                     <div className="flex">
                        <div className="px-5">{comp.att.away}</div>
                        <div className="bg-barSmallAway w-full relative"><span className="bg-barBigAway absolute" style={{width: comp.att.away, height: 24}}></span></div>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div className="flex">
                        <div className="bg-barSmallHome w-full relative"><span className="bg-barBigHome absolute" style={{width: comp.def.home, height: 24}}></span></div>
                        <div className="px-5">{comp.def.home}</div>
                     </div>
                  </td>
                  <td className="text-center py-2">Defensive Strengths</td>
                  <td>
                     <div className="flex">
                        <div className="px-5">{comp.att.away}</div>
                        <div className="bg-barSmallAway w-full relative"><span className="bg-barBigAway absolute" style={{width: comp.att.away, height: 24}}></span></div>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div className="flex">
                        <div className="bg-barSmallHome w-full relative"><span className="bg-barBigHome absolute" style={{width: comp.form.home, height: 24}}></span></div>
                        <div className="px-5">{comp.form.home}</div>
                     </div>
                  </td>
                  <td className="text-center py-2">Form</td>
                  <td>
                     <div className="flex">
                        <div className="px-5">{comp.form.away}</div>
                        <div className="bg-barSmallAway w-full relative"><span className="bg-barBigAway absolute" style={{width: comp.form.away, height: 24}}></span></div>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div className="flex">
                        <div className="bg-barSmallHome w-full relative"><span className="bg-barBigHome absolute" style={{width: comp.poisson_distribution.home, height: 24}}></span></div>
                        <div className="px-5">{comp.poisson_distribution.home}</div>
                     </div>
                  </td>
                  <td className="text-center py-2">Win Probability</td>
                  <td>
                     <div className="flex">
                        <div className="px-5">{comp.poisson_distribution.away}</div>
                        <div className="bg-barSmallAway w-full relative"><span className="bg-barBigAway absolute" style={{width: comp.poisson_distribution.away, height: 24}}></span></div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   )
 }