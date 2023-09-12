import React, { useState } from 'react'

const Contact = () => {







    
  return (
    <div name = 'contact' className='w-full h-screen bg-slate-500 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c6882c2e-1482-49f1-8b5c-318f883cec2a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white text-slate-300'>Contact</p>
                <p className='text-slate-200 py-4'>//Submit the form below or shoot me an email! - mikaylar1202@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2'type="text" placeholder='Name' name="name"/>
            <input className='bg-[#ccd6f6] my-4 p-2' type="text" placeholder='Email' name="email"/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-slate-800 px-4 py-3 my-8 mx-auto flex items-ccenter'>Contact Me!</button>
        </form>
    </div>
  )
}

export default Contact