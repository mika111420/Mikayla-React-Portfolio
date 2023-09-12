import React, {useState} from 'react' 
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {

  return (
    <div name='home' className='w-full h-screen bg-slate-500'>
        
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-slate-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-slate-200'>Mikayla Rangel</h1>
            <h2 className='text-2xl sm:text-4xl font-semibold text-slate-700'>I'm a Full Stack Developer</h2>
            <p className='py-4 max-w=[700px]'>Fueled with a passion and drive to create dynamic and innovative applications that solve real-world problems.
             Aspiring to blend creativity with technology, I'm on a mission to craft engaging user experiences and contribute to the ever-evolving digital landscape.</p>
             <div>
                <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-slate-800'> 
                            View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-4' />
                </span>
                </button>
             </div>
        </div>

    </div>
  )
}

export default Home