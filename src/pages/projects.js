import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Findme from '../components/Findme';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { BsGithub } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg";


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
                Here are a few projects I&apos;ve worked on recently
            </div>
        </div>

        <div className='text-gray-300 flex items-stretch justify-evenly mx-[100px] py-[25px] 800:block 800:w-[70vw] 800:mx-auto mob:w-full mob:mr-[10px]'>
            <div className='project-card-view mx-[25px] flex-1 800:mb-[40px]'>
                <Image src='/portfolio.png' width={500} height={500} alt='portfolio' className='p-[25px]' />
                <div className='p-[30px]'>
                    <h1 style={{ fontSize: "1.5em", paddingBottom: "5px" }} className='purple text-center'>Portfolio</h1>
                    <p className='pb-[20px]'>Discover my portfolio—crafted with Next.js and Tailwind CSS. Seamless, stylish, and showcasing innovative projects. Welcome to my digital space!</p>
                    <div className='flex justify-center'>
                    <Link 
                        href='https://github.com/Shubham-karn/portfolio'
                        target="_blank"
                        className='project-button p-[10px]'>
                        <BsGithub style={{ fontSize: "1.2em" }} />{" "}
                        <span style={{ marginLeft: "10px" }}>Github</span>
                    </Link>
                    </div>
                </div>
            </div>

            <div className='project-card-view mx-[25px] flex-1 800:mb-[40px]'>
                <Image src='/YOLO.jpeg' width={500} height={500} alt='yolo' className='pt-[25px] pl-[25px] pr-[25px]' />
                <div className='p-[30px]'>
                    <h1 style={{ fontSize: "1.5em", paddingBottom: "10px" }} className='purple text-center'>Image Detection</h1>
                    <p className='pb-[20px]'>A basic YOLOv8 model used to detect Cricketers in a video.</p>
                    <div className='flex justify-center small:block small:text-center'>
                    <Link 
                        href='https://github.com/Shubham-karn/YOLO'
                        target="_blank"
                        className='project-button p-[10px] mx-[10px] small:mb-[10px]'>
                        <BsGithub style={{ fontSize: "1.2em" }} />{" "}
                        <span style={{ marginLeft: "10px" }}>Github</span>
                    </Link>

                    <Link 
                        href='https://www.youtube.com/watch?v=3vDBO68fQ7s'
                        target="_blank"
                        className='project-button p-[10px] mx-[10px] small:mt-[10px]'>
                        <CgWebsite style={{ fontSize: "1.2em" }} />{" "}
                        <span style={{ marginLeft: "10px" }}>Demo</span>
                    </Link>

                    </div>
                </div>
            </div>

            <div className='project-card-view mx-[25px] flex-1 800:mb-[40px]'>
                <Image src='/Apple_detector.png' width={500} height={500} alt='logistic_regression' className='p-[25px]' />
                <div className='p-[20px]'>
                    <h1 style={{ fontSize: "1.5em", paddingBottom: "10px" }} className='purple text-center'>Apple Detector</h1>
                    <p className='pb-[20px]'>This model is designed to detect apples, count them, classify them based on their color, and identify and reject any that are rotten.</p>
                    <div className='flex justify-center'>
                    <Link 
                        href='https://github.com/Shubham-karn/Apple_detector'
                        target="_blank"
                        className='project-button p-[10px]'>
                        <BsGithub style={{ fontSize: "1.2em" }} />{" "}
                        <span style={{ marginLeft: "10px" }}>Github</span>
                    </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='text-gray-300 flex justify-evenly px-[100px] py-[25px] w-[73vw] mx-auto 800:block 800:w-[70vw] 800:mx-auto 800:p-[0px] mob:w-full mob:mx-[10px]'>
            <div className='project-card-view mx-[25px] flex-1 800:mb-[40px]'>
                <Image src='/Social_media.jpg' width={400} height={350} alt='CNN' className='p-[25px]' />
                <div className='p-[20px]'>
                    <h1 style={{ fontSize: "1.5em", paddingBottom: "5px" }} className='purple text-center'>Social_media trend summarizer</h1>
                    <p className='pb-[20px]'>I have utilized APIs from Facebook, Instagram, and various news platforms to gather trending news, then applied a summarization model to condense the information into concise summaries.</p>
                    <div className='flex justify-center'>
                    {/* <Link 
                        href='https://github.com/Shubham-karn/image_classifier'
                        target="_blank"
                        className='project-button p-[10px]'>
                        <BsGithub style={{ fontSize: "1.2em" }} />{" "}
                        <span style={{ marginLeft: "10px" }}>Github</span>
                    </Link> */}
                    </div>
                </div>
            </div>

            <div className='project-card-view mx-[25px] flex-1 800:mb-[40px]'>
                <Image src='/Database.gif' width={500} height={500} alt='django' className='pt-[25px] pl-[25px] pr-[25px]' />
                <div className='p-[30px]'>
                    <h1 style={{ fontSize: "1.5em", paddingBottom: "10px" }} className='purple text-center'>Django_demo</h1>
                    <p className='pb-[20px]'>This is to create a basic Django app, containerize it, and deploy it to Microsoft Azure with a CI/CD pipeline in GitHub Actions.</p>
                    <div className='flex justify-center'>
                    <Link 
                        href='https://github.com/Shubham-karn/django_demo'
                        target="_blank"
                        className='project-button p-[10px]'>
                        <BsGithub style={{ fontSize: "1.2em" }} />{" "}
                        <span style={{ marginLeft: "10px" }}>Github</span>
                    </Link>
                    </div>
                </div>
            </div>

        </div>


    <Findme />
    </section>
    <ScrollTop />
    <Footer />
    </>
  );
}

export default projects;