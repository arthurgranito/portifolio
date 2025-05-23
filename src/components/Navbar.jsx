import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <h1 className='mx-2 text-4xl font-light'>AG</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/arthur-granito-b28721320/" target='_blank'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/arthurgranito" target='_blank'>
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/arthurgranito_/" target='_blank'>
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar