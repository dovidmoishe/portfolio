"use client";

import React from "react";
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
import HugeiconsIcon from "@/components/HugeiconsIcon";
import {
  ArrowDown01Icon,
  Calendar01Icon,
  Download04Icon,
} from "@hugeicons/core-free-icons";
import SkillsSlider from "./SkillsSlider";
import { getHeroViewModel } from "@/features/hero/store";

const NAVBAR_OFFSET = 96;

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
  { icon: <SiRedis />, name: "Redis" },
];

function Hero() {
  const heroData = getHeroViewModel();

  const handleSectionScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: Math.max(sectionTop, 0),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="overflow-x-hidden pt-24 md:pt-28 lg:pt-32"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 md:gap-10 md:px-10">
        <div className="flex w-full max-w-3xl flex-col items-start">

          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="font-serif max-w-4xl text-left text-3xl font-bold leading-tight tracking-normal text-foreground md:text-4xl lg:text-5xl"
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

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.28, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <motion.a
              href="https://cal.com/itsdavetech/30min"
              type="button"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSectionScroll("contact")}
              className="group inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-[15px] font-medium text-foreground/78 transition-colors duration-200 hover:border-foreground/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <HugeiconsIcon icon={Calendar01Icon} size={13} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" />
              Book a call
            </motion.a>

            <motion.a
              href="/dave-cv.pdf"
              download="Dave-Baiye-CV.pdf"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-[15px] font-medium text-foreground/78 transition-colors duration-200 hover:border-foreground/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <HugeiconsIcon icon={Download04Icon} size={13} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5" />
              Resume
            </motion.a>
          </motion.div>
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
