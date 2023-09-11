import React from 'react'
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-slate-500  text-slate-200'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4'>Experience</p>
                <p>Here are the technologies I've worked with</p>
            </div>

            <div>
                <div>
                    <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                    <p>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills