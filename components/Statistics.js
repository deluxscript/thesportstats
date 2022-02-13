export default function Statistics({ stats }) {
   const comp = stats.response[0].comparison
   console.log("stats", comp)
   return (
      <div className="py-8">
         <h1 className="my-2 text-lg text-white">Statistics</h1>
         <table className="table-fixed text-white w-full">
            <tbody>
               <tr>
                  <td>1</td>
                  <td>Attacking Strengths</td>
                  <td>2</td>
               </tr>
               <tr>
                  <td>1</td>
                  <td>Defensive Strengths</td>
                  <td>2</td>
               </tr>
               <tr>
                  <td>1</td>
                  <td>Form</td>
                  <td>2</td>
               </tr>
               <tr>
                  <td>1</td>
                  <td>Form</td>
                  <td>2</td>
               </tr>
            </tbody>
         </table>
      </div>
   )
 }