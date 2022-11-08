import React from 'react';
import "./Footer.css";

const Footer = () => {


  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-200'>
            <div className='grid footer-content text-center'>
                <p className='text'>Copyright © 2022 Kodegurus | Powered by Kodegurus</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
