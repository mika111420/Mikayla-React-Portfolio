import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'

import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-500 text-white'>
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="portfolio" smooth={true} duration={500}>
                            Portfolio
                        </Link>
                    </li>
                    <li><Link to="resume" smooth={true} duration={500}>
                        Resume
                    </Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link></li>
                </ul>
            </div>

            <div onClick={handleClick} className='md:hidden z-10'>
                <FaBars />
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About Me
                </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
                    Portfolio
                </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="resume" smooth={true} duration={500}>
                    Resume
                </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-300'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">Linkedin<FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">GitHub<FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">Email<HiOutlineMail size={30} /></a>
                    </li>
                </ul>
            </div>
        </div>

    )
};

export default Navbar