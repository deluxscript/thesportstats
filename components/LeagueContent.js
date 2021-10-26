import Image from 'next/image'
import Fixture from './Fixture'
export default function LeagueContent({ details }) {
   return (
      <div className="px-2">
         {details.map((evt) => (
            <Fixture key = { evt.fixture.id } id = { evt.fixture.id } teams= { evt.teams } time = { evt.fixture.timestamp } status = { evt.fixture.status }/>
         ))}
      </div>
   )
 }
 