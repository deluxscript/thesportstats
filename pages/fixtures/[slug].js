import {redis} from '../../lib/redis'
import Layout from '../../components/Layout'
import SingleTeamStat from '../../components/singleTeamStat'
import {
   getFixtures,
   getResults,
   getTeamStats,
   head2head,
   teamStanding,
   getStatistics
} from '../../lib/api'

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
   awayTeamStanding,
   getFixtureStatistics
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
               getFixtureStatistics = { getFixtureStatistics }
            />
         </div>
      </Layout>
   )
}

export async function getServerSideProps({ query: { id }}) {
   let getTeamData
   const singleFixture = `fixtures-${id}`
   const value = await redis.get(singleFixture)

   if(value === null){
      getTeamData = await getFixtures(`id=${id}`)
      await redis.set(singleFixture, JSON.stringify(getTeamData), "EX", 129600)
   }
   else {
      getTeamData = JSON.parse(await redis.get(singleFixture))
   }
   const getLeague = getTeamData.response[0].league
   const homeTeam = getTeamData.response[0].teams.home
   const awayTeam = getTeamData.response[0].teams.away

   const [ homeTeamStat, awayTeamStat, h2h, standings, homeStanding, awayStanding, last5Home, last10Home, last15Home, last5Away, last10Away, last15Away, FixStats] = [`homeTeamStat-${id}`, `awayTeamStat-${id}`, `h2h-${id}`, `standings-${id}`, `homeStanding-${id}`, `awayStanding-${id}`, `last5Home-${id}`, `last10Home-${id}`, `last15Home-${id}`, `last5Away-${id}`, `last10Away-${id}`, `last15Away-${id}`, `FixStats-${id}`]

   const [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13] = await Promise.all([
      await redis.get(homeTeamStat),
      await redis.get(awayTeamStat),
      await redis.get(h2h),
      await redis.get(standings),
      await redis.get(homeStanding),
      await redis.get(awayStanding),
      await redis.get(last5Home),
      await redis.get(last10Home),
      await redis.get(last15Home),
      await redis.get(last5Away),
      await redis.get(last10Away),
      await redis.get(last15Away),
      await redis.get(FixStats)
   ])

   let getHomeTeamStat,
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
      getFixtureStatistics

      if (value1 === null || value2 === null || value3 === null || value4 === null || value5 === null || value6 === null || value7 === null || value8 === null || value9 === null || value10 === null || value11 === null || value12 === null || value13 === null) {
         [
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
            getFixtureStatistics
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
            getStatistics(`fixture=${id}`)
         ])
         await Promise.all([
            redis.set(homeTeamStat, JSON.stringify(getHomeTeamStat), "EX", 129600),
            redis.set(awayTeamStat, JSON.stringify(getAwayTeamStat), "EX", 129600),
            redis.set(h2h, JSON.stringify(getHead2Head), "EX", 129600),
            redis.set(standings, JSON.stringify(getStandings), "EX", 129600),
            redis.set(homeStanding, JSON.stringify(getHomeTeamStanding), "EX", 129600),
            redis.set(awayStanding, JSON.stringify(getAwayTeamStanding), "EX", 129600),
            redis.set(last5Home, JSON.stringify(last5HomeResults), "EX", 129600),
            redis.set(last10Home, JSON.stringify(last10HomeResults), "EX", 129600),
            redis.set(last15Home, JSON.stringify(last15HomeResults), "EX", 129600),
            redis.set(last5Away, JSON.stringify(last5AwayResults), "EX", 129600),
            redis.set(last10Away, JSON.stringify(last10AwayResults), "EX", 129600),
            redis.set(last15Away, JSON.stringify(last15AwayResults), "EX", 129600),
            redis.set(FixStats, JSON.stringify(getFixtureStatistics), "EX", 129600)
         ])
      }
      else {
         [
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
            getFixtureStatistics
         ] = await Promise.all([
            JSON.parse(await redis.get(homeTeamStat)),
            JSON.parse(await redis.get(awayTeamStat)),
            JSON.parse(await redis.get(h2h)),
            JSON.parse(await redis.get(standings)),
            JSON.parse(await redis.get(homeStanding)),
            JSON.parse(await redis.get(awayStanding)),
            JSON.parse(await redis.get(last5Home)),
            JSON.parse(await redis.get(last10Home)),
            JSON.parse(await redis.get(last15Home)),
            JSON.parse(await redis.get(last5Away)),
            JSON.parse(await redis.get(last10Away)),
            JSON.parse(await redis.get(last15Away)),
            JSON.parse(await redis.get(FixStats))
         ])
      }

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
         getFixtureStatistics: getFixtureStatistics
      },
   }
 }

 export default BrandPage