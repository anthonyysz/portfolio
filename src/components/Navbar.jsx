import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.png';
import resume from '../assets/anthony-szabo-resume.pdf'
import '../style/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='navbar'>
        <div>
          <img src={logo} alt="Logo Image" className='logo'/>
        </div>       
        <ul className='navbar-buttons'>
          <li><Link className='navbar-item' to="/">Home</Link></li>
          <li><Link className='navbar-item' to="/skills">Skills</Link></li>
          <li><Link className='navbar-item' to="/work">Work</Link></li>
        </ul>

        {/* Hamburger*/}
        <div onClick={handleClick} className='hamburger'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul 
          className={
            !nav 
              ? 'hidden' 
              : 'mobile-menu'
          }
        >
          <li className='mobile-menu-items'>
            <Link to="/" onClick={() => setNav(false)} >Home</Link>
          </li>
          <li className='mobile-menu-items'>
            <Link to="/skills" onClick={() => setNav(false)} >Skills</Link>
          </li>
          <li className='mobile-menu-items'>
            <Link to="/work" onClick={() => setNav(false)} >Work</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className='social-icon-bar'>
          <ul>
            <li className='social-icon bg-blue-600'>
              <a  className='social-icon-text' href="https://www.linkedin.com/in/anthony-szabo-a3976622b/">LinkedIn <FaLinkedin size={30} /></a>
            </li>
            <li className='social-icon bg-[#333333]'>
              <a  className='social-icon-text' href="https://github.com/anthonyysz">GitHub <FaGithub size={30} /></a>
            </li>
            <li className='social-icon bg-[#FD4866]'>
              <a className='social-icon-text' href="mailto:anthony_szabo@hotmail.com">Email <HiOutlineMail size={30} /></a>
            </li>
            <li className='social-icon bg-[#565F69]'>
              <a  className='social-icon-text' href={resume} download="anthony-szabo-resume.pdf">
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
