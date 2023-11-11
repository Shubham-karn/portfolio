import React from 'react';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import Image from 'next/image';
import { ImPointRight } from "react-icons/im";

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
                Know Who <strong className="purple">I&apos;M</strong>
                </h1>
            <div className='text-gray-300 p-[20px] pl-[60px] text-left text-xl 1100:pr-[100px] 800:pl-[60px] 800:pr-[40px] 800:text-lg'>
            <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Karn </span>
            from <span className="purple"> Kathmandu, Nepal.</span>
            <br /> I am a final year student pursuing <span className='purple'>Engineering </span>
             at <span className="purple"> Pulchowk Campus</span>.
            <br />
            <br />
            Proven track record of delivering top-notch projects, ready to turn your ideas into reality and bring your vision to life.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <div className='ml-[30px] p-[5px] mt-[10px]'>
            <div className='flex'>
            <ImPointRight /> <span className='pl-[10px]'>Playing Games</span>
            </div>
          </div>
          <div className='ml-[30px] p-[5px] pt-[2px]'>
            <div className='flex'>
            <ImPointRight /> <span className='pl-[10px]'>Watching Movies</span>
            </div>
          </div>
          <div className='ml-[30px] p-[5px] pt-[2px]'>
            <div className='flex'>
            <ImPointRight /> <span className='pl-[10px]'>Travelling</span>
            </div>
          </div>
              </div>
              <p style={{ fontSize: "1.25rem", paddingBottom: "20px" }} className='mx-auto text-quote'>
                "Building digital products, brands and experience."
                </p>
              </div>
            <div className='w-5/12 pb-[20px] pt-[130px] 800:w-full 800:pt-[30px]'>
                  <Image
                src="/about.png"
                alt="home pic"
                width={700}
                height={700}
              />
                  </div>
        </div>
    </section>
    <ScrollTop />
    <Footer />
    </>
  );
}

export default About;
