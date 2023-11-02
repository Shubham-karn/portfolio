import Link from 'next/link';
import React, { useState, useEffect } from "react";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";

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
      <nav className={`${navColour ? "sticky" : "navbar"} flex text-gray-300 mx-10 w-full`}>
        <div className="">
          Home
        </div>
        <div className='flex justify-end'>
          <Link href="/destination-page" className='p-4 flex item-center'>
              <AiOutlineHome style={{ marginTop: "5px" }}/>
              {" "}
              <span style={{ marginLeft: "10px" }}>Home</span>
          </Link>
          <Link href="/destination-page" className='p-4 flex item-center'>
              <AiOutlineUser style={{ marginTop: "5px" }}/>
              {" "}
              <span style={{ marginLeft: "10px" }}>About</span>
          </Link>
          <Link href="/destination-page" className='p-4 flex item-center'>
              <AiOutlineFundProjectionScreen style={{ marginTop: "5px" }}/>
              {" "}
              <span style={{ marginLeft: "10px" }}>Projects</span>
          </Link>
        </div>
        <div className='fork-btn'>
          <button className='fork-btn-inner flex'>
          <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
          <AiFillStar style={{ fontSize: "1.1em" }} />
          </button>
        </div>
      </nav>
    );
};

export default Navbar;
