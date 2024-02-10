import React from 'react';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

function Findme() {
  return (
    <>
    <h1 style={{ fontSize: "2.6em" }} className='text-gray-300 pt-[50px] text-center'>
              FIND <span className="purple"> ME </span> ON
            </h1>
            <div className='text-gray-300 pb-[20px] text-center'>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shubham-karn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <div className='relative p-[7px]'>
                    <AiFillGithub className='w-[25px] h-[25px]'/>
                  </div>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <div className='relative p-[7px]'>
                    <AiOutlineTwitter className='w-[25px] h-[25px]'/>
                  </div>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shubham-karn-37a1052b3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <div className='relative p-[7px]'>
                    <FaLinkedinIn className='w-[25px] h-[25px]'/>
                  </div>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shubhamkarn771/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <div className='relative p-[7px]'>
                    <AiFillInstagram className='w-[25px] h-[25px]'/>
                  </div>
                </a>
              </li>
            </ul>
            </div>
    </>
  );
}

export default Findme;
