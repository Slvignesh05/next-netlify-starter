import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Subdomain Takeover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="author">POC by w3shi (S. Lakshmi Vignesh)(HackerOne)</p>
      </main>

      <Footer />
      <style jsx>{`
        .author {
          font-size: 2rem; /* Adjust the size as needed */
          font-weight: bold;
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  )
}
