import React from 'react'
import { FaBars } from "react-icons/fa6";
import Logo from '../assets/Logo.svg';
const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center justify-center gap-6'>
                <img src={Logo} />
                <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white p-2 rounded-2xl'>AR is Hiring</button>
            </div>
            <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-4'>
                <li><a href='#'>Plans</a></li>
                <li><a href='#'>Find Domain</a></li>
                <li><a href='#'>Why AR</a></li>
            </ul>
            <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
                <a href='#'>Sign In</a>
                <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-500 text-white lg:rounded-full'>Join Waitlist</button>
            </div>
            <div className='lg:hidden'>
                <FaBars />
            </div>

        </div>
    )
}

export default Header