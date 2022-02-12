import Image from 'next/image'
import Layout from '../components/Layout'
import LeagueBox from '../components/LeagueBox'
import { getFixtures } from '../lib/api'

import banner1 from '../public/images/banner.png'
import banner2 from '../public/images/banner2.png'

export default function Home(data) {
   const fixtureData = data.data.response
   const groupedData = fixtureData.reduce((obj, item) => {
      const res = obj[item.league.id] || []
      return {...obj, [item.league.id]: [...res, item]}
   }, {})
   var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   var today  = new Date();

  return (
    <Layout>
       <div>
       <h1 className="text-white text-lg py-4 text-center font-bold  bg-statsBgColor rounded-3xl mb-4">{ today.toLocaleDateString("en-US", options) }</h1>
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
Layout.defaultProps = {
   title: 'TheSoccerStats | Football Stats and analysis',
   description: 'TheSoccerStats features statistics across all football leagues in the world',
   keywords: 'football, thesoccerstats, soccer, stats, statistics, tables, database, standings, form, results, top scorers, form tables, football statistics, ladder, league tables',
 }