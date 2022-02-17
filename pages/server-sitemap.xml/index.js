import { getServerSideSitemap } from "next-sitemap";
import { getFixtures } from '../../lib/api'
import moment from 'moment';

export const getServerSideProps = async (ctx) => {

   let fields = []
   for (let i = 1; i < 5; i++) {
      const res = moment().add(i, 'days');
      const getAllFixtures = await getFixtures(`date=${res.format('YYYY-MM-DD')}`)
      for (const element of getAllFixtures.response) {
         const id = element.fixture.id
         if((element.teams.home.name) && (element.teams.away.name)){
            fields.push({
               loc: `https://www.thesoccerstats.com/fixtures/${(element.teams.home.name).toLowerCase().replace(/\s+/g, '-').replace(/&/g, "&amp;")}-vs-${(element.teams.away.name).toLowerCase().replace(/\s+/g, '-').replace(/&/g, "&amp;")}?id=${id}`,
               lastmod: new Date().toISOString(),
            })
         }
         
      }
   }

   for (let i = 1; i < 3; i++) {
      const res = moment().add(-i, 'days');
      const getAllFixtures = await getFixtures(`date=${res.format('YYYY-MM-DD')}`)
      for (const element of getAllFixtures.response) {
         const id = element.fixture.id
         if((element.teams.home.name) && (element.teams.away.name)){
            fields.push({
               loc: `https://www.thesoccerstats.com/fixtures/${(element.teams.home.name).toLowerCase().replace(/\s+/g, '-').replace(/&/g, "&amp;")}-vs-${(element.teams.away.name).toLowerCase().replace(/\s+/g, '-').replace(/&/g, "&amp;")}?id=${id}`,
               lastmod: new Date().toISOString(),
            })
         }
         
      }
   }

   for (let i = 1; i < 3; i++) {
      const res = moment().add(-i, 'days');
      fields.push({
         loc: `https://www.thesoccerstats.com/matches/${res.format('YYYY-MM-DD')}`,
         lastmod: new Date().toISOString(),
      })
   }

   for (let i = 1; i < 5; i++) {
      const res = moment().add(i, 'days');
      fields.push({
         loc: `https://www.thesoccerstats.com/matches/${res.format('YYYY-MM-DD')}`,
         lastmod: new Date().toISOString(),
      })
   }

return getServerSideSitemap(ctx, fields);
};

export default function Site() {}