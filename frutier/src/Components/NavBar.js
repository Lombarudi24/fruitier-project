import React from 'react'
import { FaBell, FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';

export default function NavBar() {
    const navBarRef = useRef();

    const activatedNavBar = () => {
        navBarRef.current.classlist.toggle("responsive-navBar")
    }

  return (
    <div className="Nav">
      <a className="logo" href="/#">
        FRUITIER
      </a>
      <nav className="navbar">
        <a href="/#"> Home </a>
        <a href="/#"> Fruits </a>
        <a href="/#"> about </a>
        <button>
          {" "}
          <FaBell />{" "}
        </button>{" "}
        {/* <button nav-close-btn onClick={activatedNavBar}>
          <FaTimes />
        </button> */}
      </nav>
      <button className="nav-btn" onClick={activatedNavBar}>
        <FaBars />
      </button>
    </div>
  );
}
