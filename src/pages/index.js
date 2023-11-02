import Head from 'next/head';
import NavBar from '../components/Navbar';
import Type from '../components/Type';
import Image from 'next/image';

export default function Index() {
    return (
        <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
          <NavBar />
          <section>
            <div className='home-section'>
              <div className='text-gray-300 flex mx-20 w-80/100 pt-[9rem] pb-[2rem] text-left'>
                  <div className='pt-[80px] w-7/12 flex flex-col'>
                  <h1 className='pl-[50px] text-4xl'>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="mt-[25px] pl-[45px] text-[2.5em]">
                I'M
                <strong className="text-indigo-500"> SHUBHAM KARN</strong>
              </h1>

              
              <div className='p-[50px] text-left'>
                <strong className="text-indigo-500 text-[2.5em]"><Type /></strong>
              </div>

                  </div>

                  <div className='w-5/12 pb-[20px]'>
                  <Image
                src="/home-main.svg"
                alt="home pic"
                width={535}
                height={535}
              />
                  </div>
              </div>
            </div>
          </section>
        </>
    );
  }