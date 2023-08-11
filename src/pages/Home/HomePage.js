import React from "react";
import profileImage from '../../assets/profileImage.png';


export const HomePage = () => {
    return (
        <div name="home"
        className="h-screen w-full bg-gradient-to-b from-indigo-950 to-violet-900">
            
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center 
            h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white"> Jacob Christensen </h2>
                    <p className="text-gray-200 py-4 max-w-xl">
                        I am a Computer Engineering graduate with 3 years
                        of professional experience in designing, developing, 
                        and managing software solutions.
                    </p>
                </div>
                <div className="flex flex-col">
                    <img src={profileImage} alt="profile_img"
                    className="rounded-2xl mx-auto w-1/2 md:w-full"/>
                </div>
            </div>
        </div>
    );
}