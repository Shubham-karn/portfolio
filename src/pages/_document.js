import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
        {/* Scroll reveals start hidden, so show them outright when JS is off. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; } .timeline-dot { transform: scale(1) !important; }`}</style>
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics/>
      </body>
    </Html>
  )
}