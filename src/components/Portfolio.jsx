import React from 'react'
import noteTaker from '../assets/notetaker.png'
import password from '../assets/password.jpg'
import cloud from '../assets/cloud.jpg'
import portfolio from '../assets/portfolio.png'
import weather from '../assets/weather.jpg'
import readme from '../assets/readme.jpg'

export const Portfolio = () => {
    return (
        <div name='portfolio' className='w-full h-screen bg-slate-500  text-slate-200'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-slate-300'>Portfolio</p>
                    <p className='py-6'>// Check out some of my recent applications</p>
                </div>



                <div style={{backgroundImage: `url(${noteTaker})`}}
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Note Taker Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio