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
        <Header title="Hello World!" />
        <p className="description" style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
          PoC by w3shi (S. Lakshmi Vignesh)(HackerOne)
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img 
            src="https://raw.githubusercontent.com/izumigoto/akino/refs/heads/main/cat0nkolam.png" 
            alt="Circular Image"
            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
