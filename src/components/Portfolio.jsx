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



                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div' style={{ backgroundImage: `url(${noteTaker})` }}>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                Note Taker App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div' style={{ backgroundImage: `url(${weather})` }}>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                Weather Forecast
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div' style={{ backgroundImage: `url(${cloud})` }}>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                Wish Cloud
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div' style={{ backgroundImage: `url(${password})` }}>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                               Password Generator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div' style={{ backgroundImage: `url(${readme})` }}>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                            README Generator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div' style={{ backgroundImage: `url(${portfolio})` }}>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                CSS Portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Code</button>
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