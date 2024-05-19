import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () =>{
    return (
      <div className="flex mt-auto bg-black text-white justify-between px-8 py-6">
  
        <div>

        <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'><Link to={"/contact"}>Contact Us</Link></h3>
        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400'>

        <li>Email Address</li>
        <li>Telephone Number</li>
        </ul>
        
        </div>
  
        <div>
        <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>Address</h3>
        <p className='max-w-md space-y-1 text-gray-500 list-disc dark:text-gray-400'>Noida, Uttar Pradesh </p>
        </div>
        
        <div>
        <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'><Link to={"/about"}>About Us </Link></h3>
        </div>
      </div>
    )
  };

export default Footer;