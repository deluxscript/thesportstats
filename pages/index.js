import Layout from '../components/Layout'
import { getFixtures } from '../lib/api'

export default function Home(data) {
   console.log(data)
  return (
    <Layout>
       Home
    </Layout>
  )
}

export async function getServerSideProps() {
   const getFixture = await getFixtures('date=2021-10-20&league=426&season=2021')

   return {
      props: {
         data: getFixture
      }
   }
}