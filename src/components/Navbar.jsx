import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2C6D08] text-[#F8F0C6]'>
        <div>
          <img src={logo} alt="Logo Image" style={{width: '80px'}}/>
        </div>
        
        
        <ul className='hidden md:flex'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/skills'>Skills</a>
          </li>
          <li>
            <a href='/work'>Work</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>

        {/* Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul 
          className={
            !nav 
              ? 'hidden' 
              : 'absolute top-0 left-0 w-full h-screen bg-[#2C6D08] text-[#F8F0C6] flex flex-col justify-center items-center'
          }
        >
          <li className='py-6 text-4xl'>
            <a href='/'>Home</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='/about'>About</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='/skills'>Skills</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='/work'>Work</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='/contact'>Contact</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
              <a  className='flex justify-between items-center w-full text-[#F8F0C6]' href="/">
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
              <a  className='flex justify-between items-center w-full text-[#F8F0C6]' href="https://github.com/anthonyysz">
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#FD4866]'>
              <a  className='flex justify-between items-center w-full text-[#F8F0C6]' href="/">
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565F69]'>
              <a  className='flex justify-between items-center w-full text-[#F8F0C6]' href="/">
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar
