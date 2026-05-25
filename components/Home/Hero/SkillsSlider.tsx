"use client";

import type { CSSProperties } from "react";
import { useState, useEffect } from "react";

interface Skill {
  icon: React.ReactNode;
  name: string;
}

interface SkillsSliderProps {
  skills: Skill[];
}

const MOBILE_SEC = 50;
const DESKTOP_SEC = 85;

export default function SkillsSlider({ skills }: SkillsSliderProps) {
  const repeated = [...skills, ...skills];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const seconds = isMobile ? MOBILE_SEC : DESKTOP_SEC;

  return (
    <div className="relative w-full overflow-x-hidden py-4">
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-linear-to-l from-background to-transparent md:w-32" />
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent md:w-32" />

      <div
        key={seconds}
        className="skills-marquee-track flex w-max gap-2 md:gap-3"
        style={
          {
            "--skills-marquee-duration": `${seconds}s`,
          } as CSSProperties
        }
      >
        {repeated.map((skill, i) => (
          <div
            key={i}
            className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-border bg-surface/55 px-3 py-2 text-xs font-medium text-foreground md:px-4 md:py-3 md:text-sm"
          >
            <span className="text-lg md:text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
