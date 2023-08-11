import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export const SocialLinks = () => {
 
    return (
    <div className="flex flex-row">
        <ul className="flex flex-row w-full justify-between">
            <li className='flex justify-between items-start w-14 h-14'>
                <a href='https://www.linkedin.com/in/jacob-christensen-23a8b5134/' 
                className='text-white' target='_blank'>
                    <FaLinkedin size={45} />
                </a>
            </li>
            <li className='flex justify-between items-center w-14 h-14'>
                <a href='https://github.com/jacobjc2' 
                className='text-white' target='_blank'>
                    <FaGithub size={45} />
                </a>
            </li>
            <li className='flex justify-between items-center w-14 h-14'>
                <a href='mailto:jacobjc2@gmail.com'
                className='text-white' target='_blank'>
                    <HiOutlineMail size={45} />
                </a>
            </li>
        </ul>
    </div>
  )
}

