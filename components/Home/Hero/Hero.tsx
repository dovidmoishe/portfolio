"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiAntdesign,
  SiDocker,
  SiExpress,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiRust,
  SiSolana,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import SkillsSlider from "./SkillsSlider";
import { getHeroViewModel } from "@/features/hero/store";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaReact />, name: "React Native" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiNestjs />, name: "NestJS" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiGo />, name: "Golang" },
  { icon: <SiRust />, name: "Rust" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiSolana />, name: "Solana" },
  { icon: <SiJavascript />, name: "Javascript" },
  { icon: <SiTypescript />, name: "Typescript" },
  { icon: <RiNextjsFill />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiAntdesign />, name: "AntDesign" },
  { icon: <SiWeb3Dotjs />, name: "Web3" },
  { icon: <SiRedis />, name: "Redis" }
];

function Hero() {
  const heroData = getHeroViewModel();

  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center justify-center overflow-x-hidden px-6 pt-24 md:px-10 md:pt-28 lg:pt-32"
    >
      <div className="flex w-full max-w-5xl flex-col gap-8 md:gap-10">
        <div className="flex w-full max-w-3xl flex-col items-start">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            className="relative mb-12 h-28 w-28 overflow-hidden rounded-full bg-surface-muted md:mb-14 md:h-36 md:w-36"
          >
            <Image
              src={heroData.profile.imageSrc}
              alt={heroData.profile.imageAlt}
              width={144}
              height={144}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="max-w-4xl text-left text-3xl font-bold leading-tight tracking-normal text-foreground md:text-4xl lg:text-5xl"
          >
            Hey, I&apos;m {heroData.profile.name}. {heroData.profile.title}
          </motion.h1>

          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-left text-lg leading-7 text-foreground/68 md:text-xl md:leading-8"
          >
            {heroData.profile.tagline}
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
        >
          <SkillsSlider skills={skills} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
