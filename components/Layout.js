import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'TheFootballStats | Football Stats and analysis',
  description: 'TheFootballStats features statistics across all football leagues in the world',
  keywords: 'football, soccer, stats, statistics, tables, database, standings, form, results, top scorers, form tables, football statistics, ladder, league tables',
}
