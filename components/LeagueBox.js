import LeagueContent from "./LeagueContent";
import LeagueHeader from "./LeagueHeader";

export default function LeagueBox({leagueTitle, details}) {
  return (
     <div>
        <LeagueHeader title =  { leagueTitle } country = { details[0].league.country } logo = { details[0].league.logo } />
        <LeagueContent details = { details } />
     </div>
  )
}
