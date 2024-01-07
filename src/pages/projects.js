import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';


function projects() {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <NavBar />
    <section>
        <div className='text-gray-300 pt-[9rem] pb-[2rem] text-center'>
            <h1 style={{ fontSize: "2.4em" }} className='mx-auto'> 
                My Recent <span className='purple'> Works </span> 
            </h1>
            <div className='pt-[5px]'>
                Here are a few projects I've worked on recently
            </div>
        </div>

        
    </section>
    <ScrollTop />
    <Footer />
    </>
  );
}

export default projects;