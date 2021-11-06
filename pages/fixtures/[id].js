import Layout from '../../components/Layout'
import SingleTeamStat from '../../components/singleTeamStat'
import { getFixtures, getTeamStats } from '../../lib/api'

export default function BrandPage({ homeStat, awayStat, fixtureData }) {
   console.log('homestat', homeStat)
   console.log('awaystat', awayStat)
   console.log('fixturedata', fixtureData)
   return (
      <Layout>
         <div className="container mx-auto">
            <SingleTeamStat home = { homeStat } away = { awayStat } />
         </div>
      </Layout>
   )
}

export async function getServerSideProps({ query: { id }}) {
   const getTeamData = await getFixtures(`id=${id}`)
   const getLeague = getTeamData.response[0].league.id
   const homeTeam = getTeamData.response[0].teams.home.id
   const awayTeam = getTeamData.response[0].teams.away.id

   const [getHomeTeamStat, getAwayTeamStat] = await Promise.all([
      getTeamStats(`team=${homeTeam}&season=2021&league=${getLeague}`),
      getTeamStats(`team=${awayTeam}&season=2021&league=${getLeague}`)
   ])


   return {
      props: {
         homeStat: getHomeTeamStat,
         awayStat: getAwayTeamStat,
         fixtureData: getTeamData
      },
   }
 }