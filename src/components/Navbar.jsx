import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-500 text-white'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'50px'}}/>
        </div>
        <div>
            <ul className='hidden md:flex'>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>

        <div onClick={handleClick} className='md:hidden z-10'>
            <FaBars />
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>About Me</li>
            <li className='py-6 text-4xl'>Portfolio</li>
            <li className='py-6 text-4xl'>Resume</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-300'>
                   <a className='flex justify-between items-center w-full text-white'
                   href="/">Linkedin<FaLinkedin size={30}/></a>  
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600'>
                   <a className='flex justify-between items-center w-full text-white'
                   href="/">GitHub<FaGithub size={30}/></a>  
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400'>
                   <a className='flex justify-between items-center w-full text-white'
                   href="/">Email<HiOutlineMail size={30}/></a>  
                </li>
            </ul>
        </div>
    </div> 

  )
};

export default Navbar