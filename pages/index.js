import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    let cookies = document.cookie;
    if (!cookies) {
      document.cookie = "test_cookie=HelloWorld; path=/";
      alert("No cookie found. Setting a test cookie.");
    } else {
      alert("Cookies: " + cookies);
    }
  }, []);

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
      </main>

      <Footer />
    </div>
  )
}
