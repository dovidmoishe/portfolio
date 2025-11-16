"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Skill {
  icon: React.ReactNode;
  name: string;
}

interface SkillsSliderProps {
  skills: Skill[];
}

export default function SkillsSlider({ skills }: SkillsSliderProps) {
  const repeated = [...skills, ...skills];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative overflow-x-hidden py-4 w-full">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none" />
      
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-2 md:gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: isMobile ? 15 : 25,
          ease: "linear",
        }}
      >
        {repeated.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/40 text-gray-800 px-3 py-2 md:px-4 md:py-3 rounded-xl text-xs md:text-sm font-medium shrink-0 border border-gray-200/50"
          >
            <span className="text-lg md:text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

