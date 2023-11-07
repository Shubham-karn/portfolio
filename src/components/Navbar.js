import Link from 'next/link';
import React, { useState, useEffect } from "react";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import Image from 'next/image';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  
  const [navColour, updateNavbar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(true);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);


    return (
      <nav>
        <div className={`${navColour ? "sticky" : "navbar"} flex text-gray-300 px-10 w-full ${toggleMenu ? '' : 'bg-navbar-color backdrop-blur-custom'}`}>
          <div className="p-2 ml-4">
            <Link href='/'>
          <Image
                  src="/logo.png"
                  alt="logo"
                  width={50}
                  height={50}
                  className='800:w-[60px] 800:h-[60px]'
                />
            </Link>
          </div>
          {toggleMenu
          ? <RiMenu3Line color="#667eea" size={40} onClick={() => setToggleMenu(false)} className='hidden 800:block 800:ml-auto 800:mr-8 800:my-4' />
          : <RiCloseLine color="#667eea" size={40} onClick={() => setToggleMenu(true)} className='hidden 800:block 800:ml-auto 800:mr-8 800:my-4' />}
 
          <div className='flex justify-end w-[85vw] 800:hidden'>
            <div className='my-4 mx-8 navbar-nav'>
            <Link href="/" className='flex item-center'>
                <AiOutlineHome style={{ marginTop: "5px" }}/>
                {" "}
                <span style={{ marginLeft: "10px" }}>Home</span>
            </Link>
            </div>
            <div className='my-4 mx-8 navbar-nav'>
            <Link href="/about" className='flex item-center'>
                <AiOutlineUser style={{ marginTop: "5px" }}/>
                {" "}
                <span style={{ marginLeft: "10px" }}>About</span>
            </Link>
            </div>
            <div className='my-4 mx-8 navbar-nav'>
            <Link href="/projects" className='flex item-center'>
                <AiOutlineFundProjectionScreen style={{ marginTop: "5px" }}/>
                {" "}
                <span style={{ marginLeft: "10px" }}>Projects</span>
            </Link>
            </div>
          <div className='fork-btn px-8'>
            <Link 
            href='https://github.com/Shubham-karn'
            target="_blank"
            className='fork-btn-inner flex'>
            <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
            <AiFillStar style={{ fontSize: "1.1em" }} />
            </Link>
          </div>
          </div>
        </div>
        
        {!toggleMenu && (
            <div className='fixed top-[86px] w-full bg-navbar-color backdrop-blur-custom text-gray-300 text-[1.3rem]'>
              <div className='my-4 mx-8'>
            <Link href="/" className='flex item-center justify-center'>
                <AiOutlineHome style={{ marginTop: "5px" }}/>
                {" "}
                <span style={{ marginLeft: "10px" }}>Home</span>
            </Link>
            </div>
            <div className='my-4 mx-8'>
            <Link href="/about" className='flex item-center justify-center'>
                <AiOutlineUser style={{ marginTop: "5px" }}/>
                {" "}
                <span style={{ marginLeft: "10px" }}>About</span>
            </Link>
            </div>
            <div className='my-4 mx-8'>
            <Link href="/projects" className='flex item-center justify-center'>
                <AiOutlineFundProjectionScreen style={{ marginTop: "5px" }}/>
                {" "}
                <span style={{ marginLeft: "10px" }}>Projects</span>
            </Link>
            </div>
          <div className='fork-btn mx-[280px] my-[10px] mt-[0px]'>
            <Link 
            href='https://github.com/Shubham-karn'
            target="_blank"
            className='fork-btn-inner flex justify-center'>
            <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
            <AiFillStar style={{ fontSize: "1.1em" }} />
            </Link>
          </div>
            </div>
          )
          }
         
      </nav>
    );
};

export default Navbar;
