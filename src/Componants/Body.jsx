import React from 'react'
import Blue from '../assets/Blue-Shape.svg';
import Pink from '../assets/Pink-Shape.svg';
import Purple from '../assets/Purple-Shape.svg';
import Hero from '../assets/Hero-Model.png';
import Check from '../assets/Checkmark.svg';
const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
        <div className='flex items-center justify-center lg:flex-1 lg:h-[400px] lg:order-2'>
            <img src={Blue} alt='blue' className='-rotate-[45deg] h-64 md:h-80 lg:h-[400px]'/>
            <img src={Pink} alt='pink' className='absolute -rotate-[30deg] h-64 md:h-80 lg:h-[400px]'/>
            <img src={Purple} alt='Purple'  className='absolute -rotate-[15deg] h-64 md:h-80 lg:h-[400px]'/>
            <img src={Hero} alt='Hero'  className='absolute h-64 md:h-80 lg:h-[400px]'/>
        </div>
        <div className='space-y-4 lg:flex-1 lg:order-1'>
            <h1 className='text-5xl font-semibold font-playfair leading-tight'>Host Your website in 5 minutes</h1>
            <p className='font-lato text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut nemo voluptate possimus repellat necessitatibus id ipsa modi eum accusantium.</p>
            <form action='' className='flex flex-col space-y-4 md:flex-row lg:gap-7'>
                <input placeholder='Enter Email Address' type='email' className='text-center rounded-2xl px-4 py-3 placeholder:text-gray-400'/>
                <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-500 text-white lg:rounded-full'>join WaitList</button>
            </form>
            <div className='flex gap-2'>
                <img src={Check} alt='check'/>
                <p className='font-lato text-gray-400'>No Spam ever, UnSubscribe anytime</p>
            </div>
        </div>
    </div>
  )
}

export default Body