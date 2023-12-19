import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo_white from '../assets/logo_white.png'


export const Navbar = () => {
    
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home',
            href: '/'
        },
        {
            id: 2,
            link: 'Experience',
            href: 'experience'
        },
        {
            id: 3,
            link: 'Education',
            href: 'education'
        },
        {
            id: 4,
            link: 'Projects',
            href: 'projects'
        }
    ]

    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-slate-950 px-4 fixed">
            <div>
                <a href="/">
                <img className="object-scale-down h-20 px-4" src={logo_white} alt="logo"/>
                </a>
            </div>
            <ul className="hidden md:flex">
                {links.map(({id, link, href}) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium
                    text-gray-200 hover:scale-105 duration-200"><Link to={href}>{link}</Link></li>
                ))}
            </ul>
            
            <div onClick={() => setNav(!nav)}  className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 
                w-full h-screen bg-gradient-to-b from-slate-950 to-slate-800 text-gray-200 bg-grad">
                    {links.map(({id, link, href}) => (
                        <li key={id} className="px-4 cursor-pointer capitalize text-4xl py-6">
                            <Link onClick={() => setNav(!nav)} to={href}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}