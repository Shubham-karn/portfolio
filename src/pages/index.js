import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Preload from '../components/pre';
import ScrollTop from '../components/ScrollTop';
import Type from '../components/Type';
import Image from 'next/image';
import Findme from '../components/Findme';

export default function Index() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
    return (
        <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
          <Preload load={load} />
          <div className="App" id={load ? "no-scroll" : "scroll"}></div>
          <NavBar />
          <section>
            <div className='home-section'>
              <div className='text-gray-300 flex mx-20 w-80/100 pt-[9rem] pb-[2rem] text-left 800:block 800:mx-8'>
                  <div className='pt-[80px] w-7/12 flex flex-col 800:w-full'>
                  <h1 className='pl-[50px] text-4xl 800:pl-[30px]'>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="mt-[25px] pl-[45px] text-[2.5em] 800:pl-[30px]">
                I&apos;M
                <strong className="text-indigo-500"> SHUBHAM KARN</strong>
              </h1>

              
              <div className='p-[50px] text-left 800:p-[25px] 800:pt-[45px]'>
                <strong className="text-indigo-500 text-[2.5em] 800:text-[1.3em]"><Type /></strong>
              </div>

                  </div>

                  <div className='w-5/12 pb-[20px] 800:w-full 800:pt-[30px]'>
                  <Image
                src="/home-main.svg"
                alt="home pic"
                width={535}
                height={535}
              />
                  </div>
              </div>
            </div>

            <h1 style={{ fontSize: "2.6em" }} className='text-gray-300 pt-[50px] pb-[20px] text-center'>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            
            <div className='flex relative pb-[20px] pt-[20px] z-[-1] 800:block'>
              <div className='text-gray-300 p-[50px] pl-[100px] text-left text-xl 1100:pr-[100px] 800:pl-[60px] 800:pr-[40px] 800:text-lg'>
            <p>
            I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest&apos;s are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning and Artificial Intelligence.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Django and Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
              </div>
              <div className='w-[45vw] p-[40px] pr-[100px] pt-[10px] justify-center 1200:pt-[80px] 1100:hidden 800:w-full 800:p-[30px]'>
              <Image
                src="/avatar.svg"
                alt="logo"
                width={280}
                height={280}
                className='800:m-auto 800:w-[250px] 800:h-[250px]'
              />
              </div>
            </div>
            <Findme />
          </section>
          <ScrollTop />
          <Footer />
        </>
    );
  }