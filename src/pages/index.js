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

            <h1 style={{ fontSize: "2.6em" }} className='text-gray-300 pt-[50px] pb-[20px] text-center'>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            
            <div className='flex relative pb-[20px] pt-[20px]'>
              <div className='text-gray-300 p-[50px] pl-[100px] text-left text-xl'>
            <p>
            I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
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
              <div className='w-2/5 p-[40px] pr-[100px] pt-[10px] justify-center'>
              <Image
                src="/avatar.svg"
                alt="logo"
                width={280}
                height={280}
              />
              </div>
            </div>
          </section>
        </>
    );
  }