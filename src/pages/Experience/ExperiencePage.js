import React from 'react'


export const ExperiencePage = () => {
  
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

  const work_exp = [
    {
        id: 1,
        title: 'Sr. Technical Product Manager',
        company: 'GE HealthCare',
        start_date: 'August 2022',
        end_date: 'Current',
        desc_points: [
          {task: 'Managed $2 million project for the migration of HR data warehouse from Azure/Oracle to GE HealthCare AWS Data Platform'},
          {task: 'Developed and executed a data and integration migration plan for 200+ enterprise integrations'},
          {task: 'Owned and reported on HR integration testing with 80+ stakeholder teams'}
        ]
    },
    {
        id: 2,
        title: 'Digital Technology Development Program',
        company: 'GE HealthCare',
        start_date: 'July 2020',
        end_date: 'August 2022',
        desc_points: [
          {task: 'Rotation 4: DevOps Engineer'},
          {task: 'Rotation 3: Data Management Engineer'},
          {task: 'Rotation 2: DT Finance Operations Analyst'},
          {task: 'Rotation 1: Technical Product Manager - Order Execution'}
        ]
    },
    {
        id: 3,
        title: 'Digital Technology Intern',
        company: 'GE HealthCare',
        start_date: 'May 2019',
        end_date: 'August 2019',
        desc_points: [
          {task: 'Developed Java Spring Boot microservices to enable PDF document retrieval for field engineers'},
          {task: 'Built out a presentation and prototype of a Jenkins automation solution for Spring Boot builds'}
        ]
    },
    {
        id: 4,
        title: 'Software Development Intern',
        company: 'Brady Corporation',
        start_date: 'Sept 2018',
        end_date: 'May 2017',
        desc_points: [
          {task: 'Led initiative to revamp UI regression testing library in Selenium for higher automated test confidence'},
          {task: 'Delivered customized .NET applications for both internal and external stakeholders using WPF and MVC Web Apps'},
          {task: 'Worked directly with customers to implment and troubleshoot custom solutions on their printing devices'}
        ]
    }
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
            <div className="flex flex-col py-4">
              <h2 className="basis-3/4 text-4xl sm:text-4xl py-4 font-bold text-white">Work Experience</h2>
              <div className="flex flex-col">
                {work_exp.map(({id, title, company, start_date, end_date, desc_points}) => (
                  <div key={id} className='py-2'>
                    <div className="flex flex-row justify-between text-lg text-gray-200">
                      <p className="underline">{title}</p>
                      <p>{start_date} - {end_date}</p>
                    </div>
                    <p className="text-gray-400 text-lg">{company}</p>
                    {desc_points.map(({task}) => (
                      <p className="text-gray-400">-  {task}<br/></p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            

            <h2 className="basis-3/4 text-4xl sm:text-4xl py-4 font-bold text-white">Certifications</h2>
            <p className="text-gray-400 max-w-xl">
              Microsoft Azure Fundamentals        
            </p>
          </div>
        </div>
    </div>
  )
}
