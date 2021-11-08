import Layout from '../components/Layout'
import LeagueBox from '../components/LeagueBox'
import { getFixtures } from '../lib/api'

export default function Home(data) {
   const fixtureData = data.data.response
   const groupedData = fixtureData.reduce((obj, item) => {
      const res = obj[item.league.id] || []
      return {...obj, [item.league.id]: [...res, item]}
   }, {})

  return (
    <Layout>
       <div className="container mx-auto">
         {Object.entries(groupedData).map((evt) => (
            <div className="py-2" key={ evt }>
               <LeagueBox details = { evt[1] } />
            </div>
         ))}
       </div>
    </Layout>
  )
}

export async function getStaticProps() {
   const today = new Date().toISOString().slice(0, 10)
   const getFixture = await getFixtures(`date=${today}`)

   return {
      props: {
         data: getFixture
      },
      revalidate: 1
   }
}