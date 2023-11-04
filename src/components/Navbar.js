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

const Navbar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

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
      <nav className={`${navColour ? "sticky" : "navbar"} flex text-gray-300 px-10 w-full`}>
        <div className="p-2 ml-4">
          <Link href='/'>
        <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
              />
          </Link>
        </div>
        <div className='flex justify-end w-[85vw]'>
          <div className='my-4 mx-8 navbar-nav'>
          <Link href="/" className='flex item-center'>
              <AiOutlineHome style={{ marginTop: "5px" }}/>
              {" "}
              <span style={{ marginLeft: "10px" }}>Home</span>
              {/* <span className='navbar-nav'>brvdj
              </span> */}
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
      </nav>
    );
};

export default Navbar;
