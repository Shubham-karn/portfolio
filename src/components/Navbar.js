import Link from 'next/link';
import React, { useState, useEffect } from "react";

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
        <nav className={`${navColour ? "sticky" : "navbar"} `}>
            <div>Home</div>
        </nav>
    );
};

export default Navbar;
