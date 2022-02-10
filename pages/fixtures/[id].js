import Layout from '../../components/Layout'
import SingleTeamStat from '../../components/singleTeamStat'
import { getFixtures, getResults, getTeamStats, head2head, teamStanding } from '../../lib/api'

const BrandPage = ({
   homeTeam,
   awayTeam,
   getLeague,
   getCountry,
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
   Layout.defaultProps = {
      title: `${homeTeam} vs ${awayTeam} head to head, preview and statistics, season 2021/2022`,
      description: `${homeTeam} vs ${awayTeam} head to head, preview and statistics, match analysis powered by TheSoccerStats`,
      keywords: `${homeTeam} vs ${awayTeam} head to head, ${homeTeam}, ${awayTeam}, ${homeTeam} statistics, ${awayTeam} statistics, ${getCountry} ${getLeague} statistics, football, soccer, stats, statistics, tables, database, standings, form, results, top scorers, form tables, football statistics, ladder, league tables`,
    }
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
               getLeague = { getLeague }
               getCountry = { getCountry }
            />
         </div>
      </Layout>
   )
}

export async function getServerSideProps({ query: { id }}) {
   const getTeamData = await getFixtures(`id=${id}`)
   const getLeague = getTeamData.response[0].league
   const homeTeam = getTeamData.response[0].teams.home
   const awayTeam = getTeamData.response[0].teams.away

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
      getTeamStats(`team=${homeTeam.id}&season=2021&league=${getLeague.id}`),
      getTeamStats(`team=${awayTeam.id}&season=2021&league=${getLeague.id}`),
      head2head(`h2h=${homeTeam.id}-${awayTeam.id}&status=ft`),
      teamStanding(`league=${getLeague.id}&season=2021`),
      teamStanding(`league=${getLeague.id}&season=2021&team=${homeTeam.id}`),
      teamStanding(`league=${getLeague.id}&season=2021&team=${awayTeam.id}`),
      getResults(`league=${getLeague.id}&season=2021&team=${homeTeam.id}&last=5&status=FT`),
      getResults(`league=${getLeague.id}&season=2021&team=${homeTeam.id}&last=10&status=FT`),
      getResults(`league=${getLeague.id}&season=2021&team=${homeTeam.id}&last=15&status=FT`),
      getResults(`league=${getLeague.id}&season=2021&team=${awayTeam.id}&last=5&status=FT`),
      getResults(`league=${getLeague.id}&season=2021&team=${awayTeam.id}&last=10&status=FT`),
      getResults(`league=${getLeague.id}&season=2021&team=${awayTeam.id}&last=15&status=FT`),
   ])


   return {
      props: {
         homeTeam: homeTeam.name,
         awayTeam: awayTeam.name,
         getLeague: getLeague.name,
         getCountry: getLeague.country,
         homeStat: getHomeTeamStat,
         awayStat: getAwayTeamStat,
         h2hStats: getHead2Head,
         leagueStanding: getStandings,
         homeTeamStanding: getHomeTeamStanding,
         awayTeamStanding: getAwayTeamStanding,
         last5HomeResults: last5HomeResults,
         last10HomeResults: last10HomeResults,
         last15HomeResults: last15HomeResults,
         last5AwayResults: last5AwayResults,
         last10AwayResults: last10AwayResults,
         last15AwayResults: last15AwayResults,
      },
   }
 }

 export default BrandPage