import LeagueContent from "./LeagueContent";
import LeagueHeader from "./LeagueHeader";

export default function LeagueBox({details}) {
  return (
     <div>
        <LeagueHeader title =  { details[0].league.name } country = { details[0].league.country } logo = { details[0].league.logo } />
        <LeagueContent details = { details } />
     </div>
  )
}
