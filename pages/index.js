import {redis} from '../lib/redis'
import DateNav from '../components/dateNav'
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
       <div>
          <DateNav />
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
   const todayFixtures = `todayFixtures-${today}`
   const value = await redis.get(todayFixtures)
   let data = {}

   if(value === null){
      data = await getFixtures(`date=${today}`)
      await redis.set(todayFixtures, JSON.stringify(data), "EX", 10800)
   }
   else {
      data = JSON.parse(await redis.get(todayFixtures))
   }

   return {
      props: {
         data: data
      },
      revalidate: 1
   }
}
Layout.defaultProps = {
   title: 'TheSoccerStats | Football Stats and analysis',
   description: 'TheSoccerStats features statistics across all football leagues in the world',
   keywords: 'football, thesoccerstats, soccer, stats, statistics, tables, database, standings, form, results, top scorers, form tables, football statistics, ladder, league tables',
 }