import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${navColour ? "circularButton" : "hidden"} fixed bottom-[60px] right-[60px] 800:right-[20px]`}>
        <button className='p-[7px]' onClick={scrollToTop}>
          <FaArrowUp className='text-gray-300' />
        </button>
    </div>
  );
}

export default ScrollTop;

