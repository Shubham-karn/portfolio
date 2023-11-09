import Head from 'next/head'
import '../styles/globals.css'
import '../styles/style.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Particles from '../components/particles';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    window.scrollTo(0, 0);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <main>
      <Head>
        <title>Shubham Karn | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Shubham Karn | Portfolio" key="title" />
      </Head>
      <Particles />
      <Component {...pageProps} />

    </main>
  )
}

export default MyApp