import React from 'react'


export const EducationPage = () => {
  
  const skills = [
    {
        id: 1,
        skill: 'C#',
        level: '40%'
    },
    {
        id: 2,
        skill: 'Java',
        level: '70%'
    },
    {
        id: 3,
        skill: 'React.JS',
        level: '50%'
    },
    {
        id: 4,
        skill: 'HTML/CSS',
        level: '65%'
    },
    {
        id: 5,
        skill: 'Python',
        level: '50%'
    },
    {
        id: 6,
        skill: 'SQL',
        level: '75%'
    },
    {
        id: 7,
        skill: 'Azure Services',
        level: '25%'
    },
    {
        id: 8,
        skill: 'AWS Services',
        level: '25%'
    },
    {
        id: 9,
        skill: 'Terraform',
        level: '35%'
    },
    {
        id: 10,
        skill: 'Test-Driven Development',
        level: '60%'
    },

  ]
  
  return (
    <div name="experience"
        className="h-screen w-full bg-gradient-to-b from-slate-950 via-slate-950 to-slate-800 overflow-auto">
        <div className="max-w-screen-xl mx-auto flex flex-row items-center justify-center 
        h-full px-4 md:flex-row">
          <div className="basis-1/5 text-white px-4">
            <h2 className="text-4xl sm:text-4xl font-bold"> Skills </h2>

            {skills.map(({id, skill, level}) => (
              <div key={id}>
                <p className="text-gray-400 py-4 max-w-xl">
                {skill}
                </p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div class="bg-emerald-600 h-2.5 rounded-full" style={{width: level}}></div>
                </div>
              </div>
            ))}
            
          </div>
          <div className="basis-3/4 px-12">
            <div className='flex flex-col py-4'>
              <h2 className="text-4xl sm:text-4xl py-4 font-bold text-white">Education</h2>
              <div className="flex flex-row text-gray-200 text-lg justify-between">
                <h4>
                  Bachelor's of Science - Computer Engineering
                </h4>
                <p>
                  Grad: 2020
                </p>
              </div>
              <p className="text-gray-200 text-lg">Milwaukee School of Engineering<br/></p>
              <p className="text-gray-400">
                GPA: 3.95 <br/>
              </p>
              <p className="text-gray-400">
                Relevant Coursework: Embedded Systems and Advanced Embedded Systems, Software Development, 
                Software Tools & Practices, Networking, Digital Electronics, Linear Circuits - Steady State and Transients, 
                Digital Signal Processing, Intro to Data Science, Intro to Cyber Security, Network Security
              </p>
            </div>
            

            <h2 className="basis-3/4 text-4xl sm:text-4xl py-4 font-bold text-white">Certifications</h2>
            <div className="flex flex-row text-gray-200 text-lg justify-between">
                <h4>
                  Microsoft Azure Fundamentals
                </h4>
                <p>
                  Received: June 2022
                </p>
              </div>
          </div>
        </div>
    </div>
  )
}
