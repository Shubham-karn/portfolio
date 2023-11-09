import React from 'react';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

function About() {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <NavBar />
    <section>
        <div className='text-gray-300 flex mx-20 w-80/100 pt-[9rem] pb-[2rem] text-left 800:block 800:mx-8'>
            <div className='pt-[80px] w-7/12 flex flex-col 800:w-full'>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className='mx-auto'>
                Know Who <strong className="purple">I'M</strong>
                </h1>
            </div>
            <div className='w-5/12 pb-[20px] 800:w-full 800:pt-[30px]'>
                  <Image
                src="/about.png"
                alt="home pic"
                width={535}
                height={535}
              />
                  </div>
        </div>
    </section>
    <Footer />
    </>
  );
}

export default About;
