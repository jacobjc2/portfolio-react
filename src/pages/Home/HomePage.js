import React from "react";
import profileImage from '../../assets/profileImage.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import { SocialLinks } from "../../components/SocialLinks";


export const HomePage = () => {
    return (
        <div name="home"
        className="h-screen w-full bg-gradient-to-b from-slate-950 via-slate-950 to-slate-800">
            
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center 
            h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full px-4">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white"> Jacob Christensen </h2>
                    <p className="text-gray-400 py-4 max-w-xl">
                        I am a Software Engineer with 3 years
                        of professional experience in designing, developing, 
                        and managing software solutions.
                    </p>
                    <div>
                        <SocialLinks/>
                    </div>
                    <div>
                        <a href='/resume.pdf' target='_blank' rel='noreferrer'>
                            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center 
                            rounded-md bg-gradient-to-r from-emerald-800 to-emerald-600 cursor-pointer">
                                Resume
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdKeyboardArrowRight size={25}
                                    className="ml-1"/>
                                </span>
                            </button>
                        </a>
                    </div>
                    
                </div>
                <div>
                    <img src={profileImage} alt="profile_img"
                    className="rounded-2xl 
                    mx-auto w-1/2 md:w-full"/>
                </div>
            </div>
        </div>
    );
}