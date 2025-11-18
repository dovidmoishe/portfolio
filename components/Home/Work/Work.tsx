import React from 'react'

const works = [
  {
    role: "Fullstack Engineer/Founder",
    company: "EduLearn.fun",
    duration: "2025 - Present",
    description: "I founded EduLearn.fun in 2025 to help people learn new skills in web3 and improve their lives. I built the platform from scratch using NextJS, NestJS, PostgreSQL, Supabase and more.",
  },
  {
    role: "Frontend Engineer",
    company: "IsItSafe.io",
    duration: "2022 - Present",
    description: "I worked as a frontend engineer at IsItSafe.io to help build trust around web3 projects through community reviews and platform scores. I worked with NextJS, TailwindCSS, TypeScript, Web3Auth and AntDesign.",
  },
  {
    role: "Freelance Developer",
    company: "Freelance",
    duration: "2022 - Present",
    description: "I worked as a freelance developer to help people build their websites and applications and served 15+ happy clients. I worked with NextJS, NestJS, NodeJS, MongoDB, TailwindCSS, TypeScript and more.",
  },
];

const Work = () => {
  return (
    <div id="work" className='mt-[60px] md:mt-[80px] lg:mt-[100px]'>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 px-[16px] md:px-[32px] lg:px-[64px]">
        <div className="flex flex-col">
          <p className="opacity-[0.7] text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[28px] md:leading-[32px] lg:leading-[36px]">
            Professional Journey
          </p>
          <p className="leading-[36px] md:leading-[48px] lg:leading-[60px] font-bold text-[28px] md:text-[34px] lg:text-[40px]">Work Experience</p>
        </div>
      </div>

      <div className="mt-[32px] md:mt-[42px] lg:mt-[52px] px-[16px] md:px-[32px] lg:px-[64px]">
        <div className="flex flex-col gap-6 md:gap-8">
        {works.map((work, index) => (
         <div 
           key={index} 
           className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6 pb-6 md:pb-8 border-b border-gray-200 last:border-b-0 last:pb-0"
         >
          <div className='flex flex-col gap-2 md:gap-3 md:max-w-[60%]'>
            <div className="flex flex-col gap-1">
              <p className='text-[22px] md:text-[26px] lg:text-[28px] font-bold leading-[32px] md:leading-[38px] lg:leading-[42px]'>
                {work.role}
              </p>
              <p className='text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-[24px] md:leading-[28px] lg:leading-[30px] opacity-[0.8]'>
                {work.company}
              </p>
            </div>
            <p className='text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[22px] md:leading-[23px] lg:leading-[24px] opacity-[0.7]'>
              {work.description}
            </p>
          </div>

          <div className='flex flex-col md:items-end'>
            <p className='text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[22px] md:leading-[23px] lg:leading-[24px] opacity-[0.7] whitespace-nowrap'>
              {work.duration}
            </p>
          </div>
         </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Work;