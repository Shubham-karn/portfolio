import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { BsGithub } from "react-icons/bs"


function projects() {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <NavBar />
    <section>
        <div className='text-gray-300 pt-[9rem] pb-[2rem] text-center'>
            <h1 style={{ fontSize: "2.4em" }}> 
                My Recent <span className='purple'> Works </span> 
            </h1>
            <div className='pt-[5px]'>
                Here are a few projects I've worked on recently
            </div>
        </div>

        <div className='text-gray-300 flex justify-evenly px-[100px] py-[25px]'>
            <div className='project-card-view mx-[25px]'>
                <Image src='/portfolio.png' width={500} height={500} className='p-[25px]' />
                <div className='p-[20px]'>
                    <h1 style={{ fontSize: "1.5em", paddingBottom: "5px" }} className='purple text-center'>Portfolio</h1>
                    <p>Discover my portfolio—crafted with Next.js and Tailwind CSS. Seamless, stylish, and showcasing innovative projects. Welcome to my digital space!</p>
                    <Link 
                        href='https://github.com/Shubham-karn'
                        target="_blank"
                        className='fork-btn-inner flex'>
                        <BsGithub style={{ fontSize: "1.2em" }} />{" "}
                    </Link>
                </div>
            </div>

            <div className='project-card-view mx-[25px]'>
                <Image src='/portfolio.png' width={500} height={300} className='p-[20px]' />
                <h1 style={{ fontSize: "1.5em", paddingBottom: "5px" }} className='purple text-center'>Portfolio</h1>
                <p>Discover my portfolio—crafted with Next.js and Tailwind CSS. Seamless, stylish, and showcasing innovative projects. Welcome to my digital space!</p>
            </div>

            <div className='project-card-view mx-[25px]'>
                <Image src='/portfolio.png' width={500} height={300} className='p-[20px]' />
                <h1 style={{ fontSize: "1.5em", paddingBottom: "5px" }} className='purple text-center'>Portfolio</h1>
                <p>Discover my portfolio—crafted with Next.js and Tailwind CSS. Seamless, stylish, and showcasing innovative projects. Welcome to my digital space!</p>
            </div>
        </div>

    </section>
    <ScrollTop />
    <Footer />
    </>
  );
}

export default projects;