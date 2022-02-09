import Layout from '../../components/Layout'
import SingleTeamStat from '../../components/singleTeamStat'
import { getFixtures, getResults, getTeamStats, head2head, teamStanding } from '../../lib/api'

const BrandPage = ({
   homeStat,
   awayStat,
   h2hStats,
   last5HomeResults,
   last10HomeResults,
   last15HomeResults,
   last5AwayResults,
   last10AwayResults,
   last15AwayResults,
   leagueStanding,
   homeTeamStanding,
   awayTeamStanding
}) => {
   const sortH2H = h2hStats.response.sort((a, b) => new Date(b.fixture.date) - new Date(a.fixture.date))
   return (
      <Layout>
         <div>
            <SingleTeamStat
               home = { homeStat }
               away = { awayStat }
               h2h = { sortH2H }
               last5HomeResults = { last5HomeResults }
               last10HomeResults = { last10HomeResults }
               last15HomeResults = { last15HomeResults }
               last5AwayResults = { last5AwayResults }
               last10AwayResults = { last10AwayResults }
               last15AwayResults = { last15AwayResults }
            />
         </div>
      </Layout>
   )
}

export async function getServerSideProps({ query: { id }}) {
   const getTeamData = await getFixtures(`id=${id}`)
   const getLeague = getTeamData.response[0].league.id
   const homeTeam = getTeamData.response[0].teams.home.id
   const awayTeam = getTeamData.response[0].teams.away.id

   const [
      getHomeTeamStat,
      getAwayTeamStat,
      getHead2Head,
      getStandings,
      getHomeTeamStanding,
      getAwayTeamStanding,
      last5HomeResults,
      last10HomeResults,
      last15HomeResults,
      last5AwayResults,
      last10AwayResults,
      last15AwayResults,
   ] = await Promise.all([
      getTeamStats(`team=${homeTeam}&season=2021&league=${getLeague}`),
      getTeamStats(`team=${awayTeam}&season=2021&league=${getLeague}`),
      head2head(`h2h=${homeTeam}-${awayTeam}&status=ft`),
      teamStanding(`league=${getLeague}&season=2021`),
      teamStanding(`league=${getLeague}&season=2021&team=${homeTeam}`),
      teamStanding(`league=${getLeague}&season=2021&team=${awayTeam}`),
      getResults(`league=${getLeague}&season=2021&team=${homeTeam}&last=5`),
      getResults(`league=${getLeague}&season=2021&team=${homeTeam}&last=10`),
      getResults(`league=${getLeague}&season=2021&team=${homeTeam}&last=15`),
      getResults(`league=${getLeague}&season=2021&team=${awayTeam}&last=5`),
      getResults(`league=${getLeague}&season=2021&team=${awayTeam}&last=10`),
      getResults(`league=${getLeague}&season=2021&team=${awayTeam}&last=15`),
   ])


   return {
      props: {
         homeStat: getHomeTeamStat,
         awayStat: getAwayTeamStat,
         h2hStats: getHead2Head,
         leagueStanding: getStandings,
         homeTeamStanding: getHomeTeamStanding,
         awayTeamStanding: getAwayTeamStanding,
         last5HomeResults: last5HomeResults,
         last10HomeResults: last10HomeResults,
         last15HomeResults: last15HomeResults,
         last5HomeResults: last5AwayResults,
         last10AwayResults: last10AwayResults,
         last15AwayResults: last15AwayResults,
      },
   }
 }

 export default BrandPage