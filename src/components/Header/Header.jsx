import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
      <Navbar />
      <div className='container'>
        <div className='header-content text-center flex flex-column'>
          <h1 className='text-uppercase header-title'>
            Digital experience</h1>
          <p className='text-lead'>We Build, We Create Digital Products That Makes Sense</p>
          <a href="/" className='btn header-btn btn-blue'>
            <FaPaperPlane /> <span>Explore-Now</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header