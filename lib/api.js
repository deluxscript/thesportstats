async function fetchAPI(endpoint, param){
   const queryParam = param ? param : ''
   const res = await fetch(`${process.env.NEXT_PUBLIC_FOOTBALL_API_URL}/${endpoint}?${queryParam}`, {
      method: 'get',
      headers: {
         'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
         'x-rapidapi-host': 'v3.football.api-sports.io'
      }
   })
   const data = await res.json()
   return data
}

export async function getFixtures(param) {
   const data = await fetchAPI('fixtures', param)
   return data
 }

 export async function getResults(param) {
    const data = await fetchAPI('fixtures', param)
    return data
 }

 export async function getTeamStats(param) {
   const data = await fetchAPI('teams/statistics', param)
   return data
 }

 export async function head2head(param) {
   const data = await fetchAPI('fixtures/headtohead', param)
   return data
 }

 export async function teamStanding(param) {
   const data = await fetchAPI('standings', param)
   return data
 }