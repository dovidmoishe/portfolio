"use client";

import React from "react";
import Image from "next/image";
import Dave from '@/../public/dave.jpg'
import { FaNodeJs, FaReact, FaXTwitter } from "react-icons/fa6";
import { SiExpress, SiJavascript, SiMongodb, SiSolana, SiSupabase, SiTailwindcss, SiTypescript, SiNestjs, SiDocker, SiRedux, SiPostgresql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import SkillsSlider from "./SkillsSlider";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  {icon: <SiSolana />, name: "Solana" },
  {icon: <SiJavascript />, name: "Javascript" },
  {icon: <SiTypescript />, name: "Typescript" },
  {icon: <RiNextjsFill />, name: "Next.js" },
  {icon: <SiTailwindcss />, name: "TailwindCSS" },
  {icon: <SiNestjs />, name: "Nest.js" },
  {icon: <SiExpress />, name: "Express" },
  {icon: <SiMongodb />, name: "MongoDB" },
  {icon: <SiDocker />, name: "Docker" },
  {icon: <SiSupabase />, name: "Supabase" },
  {icon: <SiRedux />, name: "Redux" },

];

function Hero() {
  return (
    <div className="flex items-center justify-center overflow-x-hidden px-[16px] md:px-[32px] pt-[120px] md:pt-[140px] lg:pt-[160px]">
      <div className="flex flex-col items-center gap-[24px] md:gap-[32px] lg:gap-[40px] w-full max-w-full">
        <div className="bg-[#F2FFF7] rounded-[24px] md:rounded-[33px] py-[10px] px-[12px] md:pt-[12px] md:pr-[16px] md:pb-[12px] md:pl-[12px] flex items-center gap-[8px] md:gap-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            className="md:w-[14px] md:h-[14px]"
          >
            <circle cx="7" cy="7" r="7" fill="#40B869" />
          </svg>
          <p className="text-[#0E7B33] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal tracking-[0.28px] md:tracking-[0.32px]">
            Available for work
          </p>
        </div>

      
        <div className="flex items-center flex-col gap-[12px] md:gap-[16px] w-full max-w-[90%] md:max-w-[600px] lg:max-w-[748px]">
            <p className="font-bold leading-[36px] md:leading-[48px] lg:leading-[60px] text-[28px] md:text-[36px] lg:text-[40px] text-center">
            Hi, I'm David Baiye 👋
            </p>

            <p className="text-black text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[36px] opacity-[0.7] text-center">
                Fullstack Software Engineer
            </p>

            <p className="text-black text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[32px] lg:leading-[36px] opacity-[0.7] text-center">
            I design and develop fast, scalable systems that solve real problems and feel great to use.
            </p>
        </div>

        <div>
            <a 
                href="https://x.com/messages/compose?recipient_id=YOUR_X_USER_ID" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-[6px] md:gap-[8.678px] py-[14px] px-[18px] md:pt-[17.356px] md:pr-[26.034px] md:pb-[17.356px] md:pl-[21.695px] bg-black rounded-[108px] cursor-pointer hover:opacity-90 transition-opacity [box-shadow:25.316px_39.557px_13.449px_0_rgba(0,0,0,0),16.614px_25.316px_11.867px_0_rgba(0,0,0,0.01),9.494px_14.241px_10.285px_0_rgba(0,0,0,0.05),3.956px_6.329px_7.12px_0_rgba(0,0,0,0.09),0.791px_1.582px_3.956px_0_rgba(0,0,0,0.10)]"
            >
                <p className="text-white text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal tracking-[0.28px] md:tracking-[0.32px]">Message on</p>
                <FaXTwitter size={18} className="text-white md:w-[24px] md:h-[24px]" />
            </a>
        </div>

        <SkillsSlider skills={skills} />
      </div>
    </div>
  );
}

export default Hero;
