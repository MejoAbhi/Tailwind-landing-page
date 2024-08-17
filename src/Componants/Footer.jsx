import React from 'react'
import Help from '../assets/Help-Avatar.svg';
const Footer = () => {
  return (
    
        <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
            <ul className='flex gap-4 font-lato text-gray-400'>
                <li><a href='#'>Facebook</a></li>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>Twitter</a></li>
            </ul>
        
        <div className='flex space-x-3'> 
            <img src={Help} alt='help'/>
            <div>
                <p className='font-playfair'>Have any question?</p>
                <p className='font-semibold font-lato'>Talk to the spacilist</p>
            </div>
        </div>
    </div>
  )
}

export default Footer