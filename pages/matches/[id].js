import Image from 'next/image'
import DateNav from '../../components/dateNav'
import Layout from '../../components/Layout'
import LeagueBox from '../../components/LeagueBox'
import { getFixtures } from '../../lib/api'

// import banner1 from '../public/images/banner.png'
// import banner2 from '../public/images/banner2.png'

export default function Date({data, day}) {
   const fixtureData = data.response
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

export async function getServerSideProps({ query: { id } }) {
   const getFixture = await getFixtures(`date=${id}`)
   return {
      props: {
         data: getFixture,
         day: id
      }
   }
}
Layout.defaultProps = {
   title: 'TheSoccerStats | Football Stats and analysis',
   description: 'TheSoccerStats features statistics across all football leagues in the world',
   keywords: 'football, thesoccerstats, soccer, stats, statistics, tables, database, standings, form, results, top scorers, form tables, football statistics, ladder, league tables',
 }