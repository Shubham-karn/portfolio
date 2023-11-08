import Head from 'next/head'
import '../styles/globals.css'
import '../styles/style.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Particles from '../components/particles';


function MyApp({ Component, pageProps }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

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