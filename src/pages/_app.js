import Head from 'next/head'
import '../styles/globals.css'
import '../styles/style.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


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

  return (
    <main>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta property="og:url" content={process.env.FRONTEND + router.asPath} key="ogurl" />
        <meta property="og:site_name" content="Sajha Ghar" */}
          {/* key="ogsitename" /> */}
      </Head>
      <Component {...pageProps} />

    </main>
  )
}

export default MyApp