import { getServerSideSitemap } from "next-sitemap";
import { getFixtures } from '../../lib/api'

export const getServerSideProps = async (ctx) => {
   let date = new Date()
   const getAllFixtures = await getFixtures(`date=${date.toISOString().split('T')[0]}`)
   
   let fields = []
   for (const element of getAllFixtures.response) {
      const id = element.fixture.id
      fields.push({
         loc: `https://www.thesoccerstats.com/fixtures/${id}`,
         lastmod: new Date().toISOString(),
      })
   }

return getServerSideSitemap(ctx, fields);
};

export default function Site() {}