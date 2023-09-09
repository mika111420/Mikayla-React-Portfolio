import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-500 text-gray-900'>
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
    </div> 
  )
};

export default Navbar