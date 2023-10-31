import Head from 'next/head';
import NavBar from '../components/Navbar';

export default function Index() {
    return (
        <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
          <NavBar />
        </>
    );
  }