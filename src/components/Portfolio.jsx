import React from 'react'

export const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full h-screen bg-slate-500  text-slate-200'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-slate-300'>Portfolio</p>
            <p className='py-6'>// Check out some of my recent applications</p>
            </div>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                
                <div>
                    <span>

                    </span>
                    <div>
                        <a href="/">
                            <button></button>
                        </a>
                        <a href="/">
                            <button></button>
                        </a> 

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio