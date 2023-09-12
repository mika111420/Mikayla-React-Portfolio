import React from 'react'
import me from '../assets/me.jpg'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-slate-500 text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-white text-slate-300'>About</p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-3xl font-bold'>
                            <p>Hi, I'm Mikayla, nice to meet you!</p>
                            <div>
                        <img className='rounded-full py-3 mx-auto w-80 h-90' src={process.env.PUBLIC_URL + '/me.jpg'} alt='Profile'/>
                        </div>
                        </div>
                        <div>

                            <p>
                            I recently graduated from the University of Miami's Full Stack Web Development program,
                            where I honed my skills in creating robust web applications. My journey as a web developer
                            has only just kicked off, and I'm excited to continue learning, particularly in the realms
                            of UX/UI design and Cybersecurity. With a foundation in development, I aspire to bring creative
                            interaction to user interfaces and ensure the security of online experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default About